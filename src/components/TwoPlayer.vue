<script setup>
    import SideBar from './SideBar.vue';
    import GameBoard from './GameBoard.vue';
    const emit= defineEmits(['volver']);

    const backToMenu=()=>{
         emit('volver')
    };
    function handleWinner(turnWinner){
        console.log('Ganador '+turnWinner.value);
    }
    function handleDraw(value){
        return console.log('empate')
    }
</script>

<template>
    <div class="h-screen">
        <SideBar @volver="backToMenu"/>
        <div class="flex flex-col items-center justify-center h-full">
            <GameBoard @winner="handleWinner" @draw="handleDraw"/>
        </div>
    </div>
</template>


<style scoped>
</style>