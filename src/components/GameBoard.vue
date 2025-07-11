<script setup>
    import {ref} from 'vue';    

    const turns={
        x: 'X',
        o: 'O'
    }
    const winner=null;
    const winner_combo=[
     [0,1,2],   
     [3,4,5],   
     [6,7,8],   
     [0,3,6],   
     [1,4,7],   
     [2,5,8],   
     [0,4,8],   
     [2,4,6]   
    ]
    const board=ref(Array(9).fill(''));
    
    const currentTurn = ref(turns.x);

    function turnChange(){
        currentTurn.value=currentTurn.value=== turns.x ? turns.o : turns.x;
    }

    function handleClick(index){
        if(board.value[index]!=''){
            return;
        }
        board.value[index]= currentTurn.value;
        turnChange();
    }

    function checkWinner(){
        
    }

</script>

<template>
    <section class="text-white h-30 w-30 grid grid-cols-3">
        <p v-for="(square,index) in board" :key="index" @click="handleClick(index)">
            {{index}}: {{ square }}
        </p>
    </section>
</template>