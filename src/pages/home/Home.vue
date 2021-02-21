<template>

  <div  class="header">

    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>test1111</div>

  </div>
</template>

<script>

  import HomeHeader from "./components/HomeHeader.vue"
  import HomeSwiper from './components/Swiper'
  export default {
    name: "Home",

    components: {

      HomeHeader,
      HomeSwiper
    }
  }
</script>

<style  scoped>


</style>
