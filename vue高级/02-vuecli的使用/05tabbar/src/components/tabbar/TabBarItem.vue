<template>
  <div class="tab-bar-item" @click="routerClick">

    <div v-if="!active">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>


  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor:{
        style: String,
        default: 'red'
      }
    },
    data() {
      return {

      }
    },
    methods:{
      routerClick(){
        this.$router.push(this.path).catch(err => err);
      }
    },
    computed:{
      active(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.active ? {color:this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    font-size: 14px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
    text-align: center;
  }


</style>
