<script setup>
    import {ref, watch} from 'vue';
    const emit=defineEmits(['winner','draw']);

    const turns={
        x: 'X',
        o: 'O'
    }
    const draw=ref(false);
    const winner=ref(null);
    const winner_combo=[
     [0,1,2],   
     [3,4,5],   
     [6,7,8],   
     [0,3,6],   
     [1,4,7],   
     [2,5,8],   
     [0,4,8],   
     [2,4,6]   
    ];
    const board=ref(Array(9).fill(null));
    
    const currentTurn = ref(turns.x);

    function turnChange(){
        currentTurn.value=currentTurn.value=== turns.x ? turns.o : turns.x;
    }

    function handleClick(index){
        if(board.value[index]!=null || winner.value!=null){
            return;
        }
        board.value[index]= currentTurn.value;

        turnChange();
    }
    
    watch(board, (newBoard)=>{
        checkWinner(newBoard)
    },{deep:true})

    watch(winner,(newWinner)=>{
        if(newWinner!==null){
            emit('winner',winner);
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
            setDraw();
            emit('draw',draw.value);
            return;
        }
    }

    function setDraw(){
        draw.value=true;
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
        currentTurn.value=turns.x;
    }

</script>

<template>
    <section class="text-white h-90 w-90 grid grid-cols-3 grid-rows-3 relative">
        <div class="grid place-items-center" v-for="(square,index) in board" :key="index" @click="handleClick(index)">
            {{ square }}
        </div>
        <div class="absolute left-1/3 w-1 h-full bg-white"></div>
        <div class="absolute left-2/3 w-1 h-full bg-white"></div>
        <div class="absolute top-1/3 w-full h-1 bg-white"></div>
        <div class="absolute top-2/3 w-full h-1 bg-white"></div>
    </section>
    <button class="bg-red-700 rounded-2xl px-4 py-2 mt-10 text-white font-extrabold" @click="resetBoard">Resetear</button>
</template>