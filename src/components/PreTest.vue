<template>
  <div class="pretest">
      <img src="../assets/img/alphabet/bc2.png" alt="" class="bg_img">
    <img src="../assets/img/alphabet/ip1.png" alt class="ip1_img">
    <div class="pretest_wrap">
      <div class="wrap">
        <div class="wrap_item">Yy</div>
        <div class="wrap_item">Nn</div>
        <div class="wrap_item">Kk</div>
      </div>
      <img src="../assets/img/alphabet/jiantou-icon.png" alt class="jiantou_next">
    </div>
    <img src="../assets/img/alphabet/shengyin-icon.png" alt="" class="shengyin_img">
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pretest {
//   background: url("../assets/img/alphabet/bc2.png") no-repeat;
//   background-size: contain;
//   height: 7.5rem;
//   width: 13.34rem;
  overflow: hidden;
  position: relative;
  .bg_img{
      z-index: -1;
      height: 100%;
      width: 100%;
      position: absolute;
  }
  .ip1_img {
    position: absolute;
    top: 3.71rem;
    left: 0;
    height: 1.69rem;
    width: 1.92rem;
  }
  .pretest_wrap {
    display: flex;
    align-items: center;
    margin-top: 0.82rem;
    margin-left: 1.42rem;
    .wrap {
    width: 10.56rem;
    height: 3.84rem;
    background: rgba(70, 188, 69, 1);
    border: 0.15rem solid rgba(255, 255, 255, 1);
    box-shadow: 0 0.05rem 0 0 rgba(129, 158, 118, 0.25);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;

    margin-right: 0.41rem;
    .wrap_item {
      width: 2.68rem;
      height: 2.68rem;
      background: rgba(245, 245, 245, 1);
      border: 0.15rem solid rgba(255, 255, 255, 1);
      border-radius: 0.08rem;
      margin-left: 0.54rem;
      font-size:1.47rem;
        font-family:TimesNewRomanPSMT;
        font-weight:400;
        color:rgba(58,40,40,1);
        line-height:1;
        display: flex;
    align-items: center;
    justify-content: center;
    }
    :first-child {
      margin-left: 0.69rem;
    }
  }
  .jiantou_next {
    height: 0.69rem;
    width: 0.69rem;
  }
  }
  .shengyin_img {
    height: 1.13rem;
    width: 1.10rem;
    margin: .20rem auto;
  }
}
</style>
