<template>
  <div>
    <p>这是profile</p>
    <h3>Hello</h3>
    <h4>{{$route.params.name}}</h4>
    <h4>{{$route.params.age}}</h4>
    <h4>{{$route.params.height}}</h4>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log("Profile created");
    },
    destroyed() {
      console.log("Profile Destroyed");
    }
  }
</script>

<style scoped>

</style>
