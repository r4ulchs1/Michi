<script setup>
    import {ref, watch, defineProps} from 'vue';
    const emit=defineEmits(['winner','reset','ended']);
    import {winner_combo} from '../utils/constants'
    const {currentTurn, handleTurn} = defineProps({
        currentTurn:{
            type: String,
            required:true
        },
        handleTurn:{
            type: Function,
            required: true
        }
    });
    const winner=ref(null);
    const board=ref(Array(9).fill(null));
    

    function handleClick(index){
        if(board.value[index]!=null || winner.value!=null){
            return;
        }
        board.value[index]= currentTurn;
        handleTurn(board.value);
    }
    
    watch(board, (newBoard)=>{
        checkWinner(newBoard)
    },{deep:true})

    watch(winner,(newWinner)=>{
        if(newWinner!==null){
            emit('winner',newWinner);
        }
    })
    function checkWinner(board){
        for(const combo of winner_combo){
            const [a,b,c] = combo;
            if(
                board[a] && board[a] === board[b] && board[a] === board[c]){
                setWinner(board[a]);
                return;
            }
        }
        if(checkEndGame(board)){
            emit('winner',null);
            emit('ended');
            return;
        }
    }
    
    function setWinner(turn){
        winner.value=turn;
    }

    function checkEndGame(board){
        return board.every((square)=>square!==null);
    }

    function resetBoard(){
        board.value= Array(9).fill(null);
        winner.value=null;
        emit('reset');
    }

</script>

<template>
    <section class="text-white h-90 w-90 grid grid-cols-3 grid-rows-3 relative">
        <div class="grid place-items-center text-4xl" v-for="(square,index) in board" :key="index" @click="handleClick(index)">
            {{ square }}
        </div>
        <div class="absolute left-1/3 w-1 h-full bg-white"></div>
        <div class="absolute left-2/3 w-1 h-full bg-white"></div>
        <div class="absolute top-1/3 w-full h-1 bg-white"></div>
        <div class="absolute top-2/3 w-full h-1 bg-white"></div>
    </section>
    <button class="bg-red-700 rounded-2xl px-4 py-2 mt-10 text-white font-extrabold hover:cursor-pointer"  @click="resetBoard">Resetear</button>
</template>