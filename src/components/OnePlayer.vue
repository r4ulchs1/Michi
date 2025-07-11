<script>
export default {

    methods:{
        backToMenu(){
            this.$emit('volver')
        }
    }
}
</script>

<template>
    <div>
        <h2>juegar de 1</h2>
        <button @click="backToMenu">Volver al Menu</button>
    </div>
</template>

<style scoped>

</style>