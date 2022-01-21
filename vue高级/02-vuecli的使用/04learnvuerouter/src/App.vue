<template>
  <div id="app">
    <h2>我是app组件</h2>
    <!--<router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <!--<button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userName" tag="button">用户</router-link>
    <button @click="profileClick">档案</button>
    <!--<button @click="goodClick">商品</button>-->
    <router-link :to="{path: '/good',query: {area: '家电区','date': new Date()}}" tag="button">商品</router-link>

    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      homeClick(){
        this.$router.push('/home').catch(err=>err);
        console.log("点击了homeClick");
      },
      aboutClick(){
        this.$router.push('/about').catch(err=>err);;
        console.log("点击了aboutClick");
      },
      profileClick(){
        this.$router.push({
          name: "profile1",
          params:{
            name: "曹操",
            age: 57,
            height: 1.8
          }
        })
      }/*,
      goodClick(){
        this.$router.push({
          path: '/good',
          query: {
            area: '家电区',
            date: new Date()
          }
        })
      }*/
    },
    data(){
      return{
        userName: "张飞"
      }
    }
  }
</script>

<style>
  .active{
    color: #f00;
  }
</style>
