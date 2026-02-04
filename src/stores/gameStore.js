import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('game', () => {
    const score = ref({
        p1: 0,
        p2: 0,
        draw: 0
    })

    const p1Name = ref('Jugador 1')
    const p2Name = ref('Jugador 2')

    function incrementP1() {
        score.value.p1++
    }

    function incrementP2() {
        score.value.p2++
    }

    function incrementDraw() {
        score.value.draw++
    }

    function setP2Name(name) {
        p2Name.value = name
    }

    function resetScore() {
        score.value = { p1: 0, p2: 0, draw: 0 }
    }

    return {
        score,
        p1Name,
        p2Name,
        incrementP1,
        incrementP2,
        incrementDraw,
        setP2Name,
        resetScore
    }
})

export const useGamePCStore = defineStore('gamepc', () => {
    const score = ref({
        p1: 0,
        pc: 0,
        draw: 0
    })

    const p1Name = ref('Jugador 1')
    const pcName = ref('Jugador PC')

    function incrementP1() {
        score.value.p1++
    }

    function incrementPC() {
        score.value.pc++
    }

    function incrementDraw() {
        score.value.draw++
    }

    function setPCName(name) {
        pcName.value = name
    }

    function resetScore() {
        score.value = { p1: 0, pc: 0, draw: 0 }
    }

    return {
        score,
        p1Name,
        pcName,
        incrementP1,
        incrementPC,
        incrementDraw,
        setPCName,
        resetScore
    }
})