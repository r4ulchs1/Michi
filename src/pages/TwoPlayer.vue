<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import GameBoard from '../components/GameBoard.vue';
    import {turns} from '../utils/constants';
    import { useGameStore } from '../stores/gameStore';
    import SideBar from '../components/SideBar.vue';
    import ScoreBoard from '../components/ScoreBoard.vue';
    import WinnerModal from '../components/WinnerModal.vue';
    
    const router = useRouter();
    const store = useGameStore();

    const currentTurn = ref(turns.x);
    function handleTurn(){
        currentTurn.value=currentTurn.value=== turns.x ? turns.o : turns.x;
    }

    function backToMenu(){
         router.push('/');
    };

    const gameState=ref('none');
    const winnerValue=ref(null)
    
    function handleWinner(turnWinner){
        if(turnWinner!=null){
            gameState.value='winner';
            winnerValue.value=turnWinner;
            if(turnWinner === turns.x) store.incrementP1();
            if(turnWinner === turns.o) store.incrementP2();
        }
    }
    
    function setDrawGame(){
        gameState.value='draw';
        store.incrementDraw();
    }

    function resetGame(){
        currentTurn.value=turns.x;
        winnerValue.value=null;
        gameState.value='none';
    }
</script>

<template>
    <div class="h-screen relative">
        <SideBar @volver="backToMenu"/>
        <div class="flex flex-col items-center justify-center h-full">
            <ScoreBoard :player1="store.score.p1" :draw="store.score.draw" :player2="store.score.p2"/>
            <GameBoard :currentTurn="currentTurn" :handleTurn="handleTurn" @winner="handleWinner" @reset="resetGame" @ended="setDrawGame"/>
            <WinnerModal :gameState="gameState" :winnerValue="winnerValue" @reset="resetGame"/>
        </div>
    </div>
</template>


<style scoped>
</style>