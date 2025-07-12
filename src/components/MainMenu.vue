<script setup>
    import { ref } from 'vue';
    import Oneplayer from './OnePlayer.vue';
    import Twoplayer from './TwoPlayer.vue';

    const isMenu = ref(true);
    const isPlaying = ref(null);

    
    function backToMenu(){
        isMenu.value = true
        isPlaying.value = null
    }
    function playMode(modo){
        isMenu.value  =false
        isPlaying.value = modo
    }
</script>

<template>
    <div v-if="isMenu" class="fade-in flex flex-col items-center justify-center h-screen w-full bg-slate-800">
        <div class="bg-green-500 rounded-full py-3 px-8 mb-8">
            <h2 class="text-3xl font-bold">Tic Tac Toe</h2>
        </div>

        <div class="bg-white rounded-xl p-6 flex flex-col items-center gap-6 w-70">
            <button @click="playMode('onePlayer')" class="bg-gray-400 rounded-full py-3 w-full text-xl font-bold hover:bg-green-600 hover:cursor-pointer transition-colors duration-200">
            Un jugador
            </button>

            <button @click="playMode('twoPlayer')" class="bg-gray-400 rounded-full py-3 w-full text-xl font-bold hover:bg-green-600 hover:cursor-pointer transition-colors duration-200">
            1 vs 1
            </button>
        </div>
    </div>
    <Oneplayer v-if="isPlaying==='onePlayer'" @volver="backToMenu"/>
    <Twoplayer v-if="isPlaying==='twoPlayer'" @volver="backToMenu"/>
</template>

<style scoped>
</style>