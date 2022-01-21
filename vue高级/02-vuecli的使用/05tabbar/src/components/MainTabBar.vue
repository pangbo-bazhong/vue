<template>
  <div id="main-tab-bar">
    <TabBar>
      <TabBarItem path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/shouye.png">
        <img slot="item-icon-active" src="~assets/img/shouye-active.png">
        <div slot="item-text">首页</div>
      </TabBarItem>

      <TabBarItem path="category" activeColor="green">
        <img slot="item-icon" src="~assets/img/fenlei.png">
        <img slot="item-icon-active" src="~assets/img/fenlei-active.png">
        <div slot="item-text">分类</div>
      </TabBarItem>

      <TabBarItem path="shopcart" activeColor="pink">
        <img slot="item-icon" src="~assets/img/gouwuche.png">
        <img slot="item-icon-active" src="~assets/img/gouwuche-active.png">
        <div slot="item-text">购物车</div>
      </TabBarItem>

      <TabBarItem path="profile">
        <img slot="item-icon" src="~assets/img/my.png">
        <img slot="item-icon-active" src="~assets/img/my-active.png">
        <div slot="item-text">我的</div>
      </TabBarItem>

    </TabBar>
  </div>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "components/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
