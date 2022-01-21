<template>
  <!--商品-->
  <div>
    <p>这是商品页</p>
    <p>区域：{{$route.query.area}}</p>
    <p>时间: {{$route.query.date}}</p>
    <table>
      <thead>
      <tr>
        <th>商品名</th>
        <th>价格</th>
        <th>打折</th>
        <th>现价</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="good in goods">
        <th>{{good.name}}</th>
        <th>{{good.price}}</th>
        <th>{{good.discount}}</th>
        <th>{{now(good.price,good.discount)}}</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Good",
    data() {
      return {
        goods: [
          {
            name: '电视机',
            price: '2500',
            discount: 8
          },
          {
            name: '洗衣机',
            price: '3600',
            discount: 9
          },
          {
            name: '笔记本',
            price: '6000',
            discount: 7
          }
        ]
      }
    },
    methods: {
      now(price, discount) {
        return price * discount / 10;
      }
    },
    created() {
      console.log("Good created");
    },
    destroyed() {
      console.log("Good Destroyed");
    }
  }
</script>

<style scoped>

</style>
