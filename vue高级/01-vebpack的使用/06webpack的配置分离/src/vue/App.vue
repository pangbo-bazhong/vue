<template>
    <div>Hello,<p>{{name}}<p/>
        <button @click="btnClick">点击</button>
        <p class="gre">{{message}}</p>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn'

    export default {
        name: "app",
        components:{
          Cpn
        },
        data(){
            return{
                name: "张飞",
                message: "这是一条信息"
            }
        },
        methods:{
            btnClick(){
                this.name = "关羽";
            }
        }
    }
</script>

<style scoped>
    .gre{
        color: green;
    }
</style>