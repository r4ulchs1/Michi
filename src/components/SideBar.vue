<script setup>
    import { ref } from 'vue';
    const isSidebarOpen = ref(false);
    const emit= defineEmits(['volver']);

    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
    };

    const backToMenu=()=>{
         emit('volver')
    };
</script>

<template>
        <div class="absolute bg-green-500 p-4 cursor-pointer z-4" @click="toggleSidebar">
            <div class="w-6 h-1 bg-white mb-1"></div>
            <div class="w-6 h-1 bg-white mb-1"></div>
            <div class="w-6 h-1 bg-white"></div>
        </div>
        <div v-if="isSidebarOpen" class="fixed inset-0 bg-[rgba(0,0,0,0.35)] z-3" @click="toggleSidebar"></div>
        <aside :class="['rounded-r-2xl fixed h-screen w-64 bg-slate-800 z-4', { '-translate-x-full': !isSidebarOpen } ]">
            <div class="flex flex-col justify-center">
                <div class="bg-green-500 py-3.5 text-center rounded-tr-2xl mb-4">
                    <h2 class="text-black font-bold">Menu</h2>
                </div>
                <button class="bg-red-800 rounded-xl w-auto px-5 py-2 hover:cursor-pointer" @click="backToMenu">
                    <h2 class="text-white font-bold">Volver al Menu</h2>
                </button>
            </div>
        </aside>
</template>


<style scoped>
</style>