<template>
  <div>
    <p>我是Home</p>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    created() {
      console.log("home created");
    },
    destroyed() {
      console.log("home destroyed");
    },
    activated() {
      console.log(this.path)
      if(this.path){
        this.$router.push(this.path);
      }
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      this.path = this.$route.path;
      next();
    }
  }
</script>

<style scoped>

</style>
