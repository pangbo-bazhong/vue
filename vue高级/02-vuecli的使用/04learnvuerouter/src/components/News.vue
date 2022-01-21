<template>
  <div>
    <ul>
      <li>我是新闻</li>
      <li>我是新闻</li>
      <li>我是新闻</li>
      <li>我是新闻</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "News",
    created() {
      console.log("News created");
    },
    destroyed() {
      console.log("News Destroyed");
    }
  }
</script>

<style scoped>

</style>
