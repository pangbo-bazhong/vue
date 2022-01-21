<template>
  <div>
    <p>这是用户页面</p>
    <h2>{{$route.params.userName}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    created() {
      console.log("User created");
    },
    destroyed() {
      console.log("User Destroyed");
    }
  }
</script>

<style scoped>

</style>
