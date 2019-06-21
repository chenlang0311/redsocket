<template>
  <div class="pretest">
    <img src="../assets/img/alphabet/bc2.png" class="bg_img" />
    <img src="../assets/img/alphabet/ip1.png" class="ip1_img" />
    <div class="pretest_wrap">
      <img
        src="../assets/img/alphabet/left.png"
        class="jiantou_next jiantou_last"
        v-if="showWrap >1"
        @click="lastWrap"
      />
      <!-- Test1 -->
      <div class="wrap" v-if="showWrap === 1">
        <div class="wrap_item">Yy</div>
        <div class="wrap_item">Nn</div>
        <div class="wrap_item">Kk</div>
      </div>
      <!-- Test1 end-->

      <!-- Test2 -->
      <div class="wrap2" v-if="showWrap === 2">
        <img src="../assets/img/alphabet/ban2.png" class="bg_img" />
        <div class="wrap2_item"><i class="capital">N</i><i>n</i></div>
      </div>
      <div class="sort_num" v-if="showWrap === 2||showWrap === 3">
        <img src="../assets/img/alphabet/biaoqian.png" class="bg_img" />
        <p class="sort_num_des">1/3</p>
      </div>
      <!-- Test2 end-->
      <div class="wrap3" v-if="showWrap === 3">
         <img src="../assets/img/alphabet/ban3.png" class="bg_img" />
         <div class="wrap3_item">
           <img src="" alt="" class="wrap3_item_img">
         </div>
         <div class="wrap3_item"></div>
         <div class="wrap3_item"></div>
      </div>
      <img
        src="../assets/img/alphabet/jiantou-icon.png"
        class="jiantou_next"
        @click="nextWrap"
         v-if="maxWrap- showWrap> 0"
      />
    </div>
    <img src="../assets/img/alphabet/shengyin-icon.png" class="shengyin_img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWrap: 3,
      maxWrap: 3
    };
  },
  methods: {
    nextWrap() {
      if (this.maxWrap - this.showWrap > 0) {
        this.showWrap += 1;
      }
    },
    lastWrap() {
      this.showWrap > 1 && (this.showWrap -= 1);
    }
  }
};
</script>

<style lang="scss">
.pretest {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .sort_num {
    height: 1.51rem;
    width: 1.58rem;
    position: absolute;
    top: -0.36rem;
    right: 0.48rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .sort_num_des {
      font-size: 0.42rem;
      font-family: MyriadPro-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      // line-height:21px;
    }
  }
  .bg_img {
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

    .wrap {
      width: 10.56rem;
      height: 3.84rem;
      background: rgba(70, 188, 69, 1);
      border: 0.15rem solid rgba(255, 255, 255, 1);
      box-shadow: 0 0.05rem 0 0 rgba(129, 158, 118, 0.25);
      border-radius: 0.49rem;
      display: flex;
      align-items: center;
      margin: 0.82rem auto 0;
      .wrap_item {
        width: 2.68rem;
        height: 2.68rem;
        background: rgba(245, 245, 245, 1);
        border: 0.15rem solid rgba(255, 255, 255, 1);
        border-radius: 0.08rem;
        margin-left: 0.54rem;
        font-size: 1.47rem;
        font-family: TimesNewRomanPSMT;
        font-weight: 400;
        color: rgba(58, 40, 40, 1);
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      :first-child {
        margin-left: 0.69rem;
      }
    }
    .wrap2 {
      height: 3.73rem;
      width: 6.43rem;
      margin: 0.92rem auto 0;
      position: relative;
      .wrap2_item {
        font-size: 1.72rem;
        font-family: TimesNewRomanPSMT;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 1;
        margin-top: 0.12rem;
        .capital {
          font-size: 2.39rem;
        }
      }
    }
    .wrap3{
      height: 3.65rem;
      width: 10.14rem;
      margin: .98rem auto 0;
      position: relative;
      display: flex;
      align-items: center;
      .wrap3_item{
        height: 2.50rem;
        width: 2.71rem;
        border-radius: .14rem;
        margin-left: .43rem;
        background: #fff;
        padding: .10rem;
        :first{
          margin-left: .57rem;
        }
        .wrap3_item_img{
          background: red;
          height: 100%;
          width: 100%;
          border-radius: .10rem;
        }
      }
    }
    .jiantou_next {
      height: 0.69rem;
      width: 0.66rem;
      position: absolute;
      top: 2.68rem;
      right: 0.3rem;
    }
    .jiantou_last {
      left: 0.3rem;
    }
  }
  .shengyin_img {
    height: 1.13rem;
    width: 1.1rem;
    margin: 0.2rem auto;
  }
}
</style>
