<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item  in swiperList " :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>

      </swiper-slide>
      <!--<swiper-slide>-->

        <!--<img class="swiper-img"-->
             <!--src="http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"/>-->
      <!--</swiper-slide>-->

      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",

    data() {
      return {
        swiperOptions: {

          pagination: '.swiper-pagination',
          loop: true

        },

        swiperList: [
          {
            id: "1",
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"

          },

          {
            id: "2",
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"

          }

        ]
      }
    }

  }
</script>

<style scoped>

  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;

  }

  .swiper-img {

    width: 100%;
  }

</style>
