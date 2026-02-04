<script setup>
    import { defineProps } from 'vue';

    const {player1, draw, player2} =defineProps({
        player1:{
            type:Number,
            required:true
        },
        draw:{
            type:Number,
            required:true
        },
        player2:{
            type:Number,
            required:true
        },
    })
</script>

<template>
    <div class="flex gap-2 text-2xl p-5 gap-10">
        <div class="bg-white w-10 h-10 grid place-items-center rounded-lg font-bold">{{ player1 }}</div>
        <div class="bg-white w-10 h-10 grid place-items-center rounded-lg font-bold">{{ draw }}</div>
        <div class="bg-white w-10 h-10 grid place-items-center rounded-lg font-bold">{{ player2 }}</div>
    </div>
</template>