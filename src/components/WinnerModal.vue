<script setup>
    const props = defineProps({
        gameState: {
            type: String,
            required: true
        },
        winnerValue: {
            type: [String, null],
            default: null
        }
    });

    const emit = defineEmits(['reset']);
</script>

<template>
    <div v-if="gameState !== 'none'" class="fixed inset-0 bg-[rgba(0,0,0,0.35)] z-2">
        <div class="grid h-screen place-items-center">
            <div class="w-sm h-1/3 bg-slate-800 border-white border-1 grid place-items-center text-white rounded-xl">
                <div class="flex flex-col items-center gap-13" v-if="gameState === 'winner'">
                    <p class="text-4xl font-extrabold">Ganador:</p>
                    <p class="text-4xl">{{ winnerValue }}</p>
                </div>
                <div class="flex flex-col items-center gap-13" v-else-if="gameState === 'draw'">
                    <p class="text-4xl font-extrabold">Empate</p>
                </div>
                <button class="bg-red-900 px-4 py-3 rounded-2xl font-extrabold text-4xl hover:bg-red-700 hover:cursor-pointer transition-colors" @click="emit('reset')">
                    Cerrar
                </button>
            </div>
        </div>
    </div>
</template>
