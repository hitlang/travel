<template>

  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe685;</div>

    </div>

    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      中间

    </div>

    <div class="header-right">

      右边
      <span class="iconfont">&#xe688;</span>
    </div>

  </div>

</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style scoped>
  .header {
    /*border: 1px solid red;*/
    display: flex;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
  }

  .header-left {
    width: .64rem;
    float: left;
    /*border: 1px solid red;*/
  }

  .header-input {
    /*border: 1px solid red;*/
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    background: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    margin-left: .2rem;
    color: #ccc;
    padding-left: .2rem;
  }

  .back-icon {

    font-size: .4rem;
    text-align: center;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    /*border: 1px solid red;*/
    text-align: center;
  }
</style>
