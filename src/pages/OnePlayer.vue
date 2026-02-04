<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import { useGamePCStore } from '../stores/gameStore';
    import GameBoard from '../components/GameBoard.vue';
    import {turns} from '../utils/constants'
    import SideBar from '../components/SideBar.vue';
import ScoreBoard from '../components/ScoreBoard.vue';
import WinnerModal from '../components/WinnerModal.vue';
    
    const router = useRouter();
    const store = useGamePCStore();

    const boardRef=ref(null);
    const cpuName = ref('CPU');

    onMounted(async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + Math.floor(Math.random() * 10 + 1));
            cpuName.value = response.data.name;
            store.setPCName(response.data.name);
        } catch (error) {
            console.error("Error:", error);
        }
    });


    const currentTurn = ref(turns.x);
    function handleTurn(board){
        currentTurn.value=currentTurn.value=== turns.x ? turns.o : turns.x;
        if(currentTurn.value===turns.o){
            const vacias=board
            .map((square,index)=>(square===null? index:null))
            .filter(index=> index!==null);
            
            if(vacias.length===0) return;

            const randomIndex = vacias[Math.floor(Math.random() * vacias.length)];
            setTimeout(()=>{
                boardRef.value.placeSymbol(randomIndex, turns.o);
            },500)
        }
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
            if(turnWinner === turns.o) store.incrementPC();
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
            <h3 class="text-white text-xl mb-4 font-bold">VS: {{ cpuName }}</h3>
            <ScoreBoard :player1="store.score.p1" :draw="store.score.draw" :player2="store.score.pc"/>
            <GameBoard ref="boardRef" :currentTurn="currentTurn" :handleTurn="handleTurn" @winner="handleWinner" @reset="resetGame" @ended="setDrawGame"/>
            <WinnerModal :gameState="gameState" :winnerValue="winnerValue" @reset="resetGame"/>
        </div>
    </div>
</template>


<style scoped>
</style>