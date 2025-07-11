<script setup>
    import SideBar from './SideBar.vue';
    const emit= defineEmits();

    const backToMenu=()=>{
         emit('volver')
    };
</script>

<template>
    <div class="h-screen">
        <SideBar @volver="backToMenu"/>
        <div class="flex items-center justify-center h-full">
            <h1>Modo Un Jugador</h1>
        </div>
    </div>
</template>


<style scoped>
</style>