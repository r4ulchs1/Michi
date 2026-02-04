<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    
    function playMode(modo){
        if (modo === 'onePlayer') {
            router.push({ name: 'one-player' });
        } else {
            router.push({ name: 'two-player' });
        }
    }
</script>

<template>
    <div class="h-screen relative w-full overflow-hidden">
        <div class="fade-in flex flex-col items-center justify-center h-screen w-full bg-slate-800">
            <div class="bg-green-500 rounded-full py-3 px-8 mb-8 animate-bounce-in">
                <h2 class="text-3xl font-bold">Tic Tac Toe</h2>
            </div>
            <div class="bg-white rounded-xl p-6 flex flex-col items-center gap-6 w-70 animate-fade-in-up">
                <button @click="playMode('onePlayer')" class="bg-gray-400 rounded-full py-3 w-full text-xl font-bold hover:bg-green-600 hover:cursor-pointer transition-colors duration-200">
                Un jugador
                </button>
                <button @click="playMode('twoPlayer')" class="bg-gray-400 rounded-full py-3 w-full text-xl font-bold hover:bg-green-600 hover:cursor-pointer transition-colors duration-200">
                1 vs 1
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }
    @keyframes bounceIn {
    from {
        opacity: 0;
        transform: scale(0.7);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
    }

    .animate-fade-in-up {
    animation: fadeInUp 0.6s ease forwards;
    }
    .animate-bounce-in {
    animation: bounceIn 0.6s ease-out forwards;
    }
</style>
