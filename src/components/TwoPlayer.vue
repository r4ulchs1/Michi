<script setup>
    import { ref } from 'vue';
    import SideBar from './SideBar.vue';
    import GameBoard from './GameBoard.vue';
    import {turns} from '../utils/constants'
    const emit= defineEmits(['volver']);


    
    const currentTurn = ref(turns.x);
    function handleTurn(board){
        currentTurn.value=currentTurn.value=== turns.x ? turns.o : turns.x;
    }

    function backToMenu(){
         emit('volver')
    };

    const gameState=ref('none');
    const winnerValue=ref(null)
    
    function handleWinner(turnWinner){
        if(turnWinner!=null){
            gameState.value='winner';
            winnerValue.value=turnWinner;
        }
    }
    
    function setDrawGame(){
        gameState.value='draw';
    }

    function resetGame(){
        currentTurn.value=turns.x;
        winnerValue.value=null;
        gameState.value='none';
    }
</script>

<template>
    <!-- <div class="h-screen relative"> -->
        <SideBar @volver="backToMenu"/>
        <div class="flex flex-col items-center justify-center h-full">
            <GameBoard :currentTurn="currentTurn" :handleTurn="handleTurn" @winner="handleWinner" @reset="resetGame" @ended="setDrawGame"/>
            <div v-if="gameState!='none'" class="fixed inset-0 bg-[rgba(0,0,0,0.35)] z-2">
                <div class="grid h-screen place-items-center">
                    <div class="w-sm h-1/3 bg-slate-800 border-white border-1 grid place-items-center text-white">
                        <div class="flex flex-col items-center gap-13" v-if="gameState==='winner'">
                            <p class="text-4xl font-extrabold">Ganador:</p>
                            <p class="text-4xl">{{winnerValue}}</p>
                        </div>
                        <div class="flex flex-col items-center gap-13" v-else-if="gameState==='draw'">
                            <p class="text-4xl font-extrabold">Empate</p>
                        </div>
                        <button class="bg-red-900 px-4 py-3 rounded-2xl font-extrabold text-4xl" @click="resetGame">Cerrar</button>
                    </div>
                </div>
            </div>   
        </div>
    <!-- </div> -->
</template>


<style scoped>
</style>