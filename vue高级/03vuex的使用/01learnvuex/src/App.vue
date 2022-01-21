<template>
  <div id="app">
    <p>----------------------APP-------------------------------</p>
    <div>
      <h2>{{message}} </h2>
      {{$store.state.counter}}
      <button @click="add">+</button>
      <button @click="sub">-</button>
    </div>

    <p>---------------APP getters -----------------------------</p>
    {{$store.getters.square}}
    <br>
    {{$store.getters.morestu(20)}}
    <button @click="addStudent">添加用户</button>
    <p>-------------------Hello Vuex-----------------------------</p>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    data() {
      return {
        message: "Hello Vuex"
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      add(){
        this.$store.commit('increment')
      },
      sub(){
        this.$store.commit('decrement')
      },
      addStudent(){
        const student = {"name":"曹操","equipment":"青红剑","age":"20"};
         this.$store.commit('addStudent',student);
        /*this.$store.commit({
          type: 'addStudent',
          student: student
        })*/
      }
    }
  }
</script>

<style>
  #app {

  }
</style>
