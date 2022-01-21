<template>
    <div>
        <form>
            <input type="text" v-model="message">
            {{message}}
        </form>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                message: "九阳神功"
            }
        }
    }
</script>

<style scoped>

</style>