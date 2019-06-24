<template>
  <div class="myachieve" id="deg90">
    <div class="lv1">
      <div class="lv1_con" v-if="showState == 10">
        <p class="con_title f40 fw4">
          恭喜
          <span class="tdu">&nbsp;王小明&nbsp;</span>:
        </p>
        <div class="con_detail f32 fw4">
          &emsp;&emsp;学完了
          <span class="f26 detail_des">&emsp;Alphabet2-4岁 letterA&emsp;</span>阶段的
          <span class="f26 detail_des">&emsp;1&emsp;</span> 本书
        </div>
      </div>
      <img
        src="../assets/img/achieve/next.png"
        alt
        class="next_img"
        v-if="showState == 10"
        @click="toNext"
      >
      <div class="lv1_next" v-if="showState == 20">
          <div class="lv1_next_left">
                <div class="lv1_left_top">

                </div>
                <div class="lv1_left_bottom">

                </div>
          </div>
          <div class="lv1_next_right"></div>
      </div>
      <img
        src="../assets/img/achieve/last.png"
        alt
        class="next_img last_img"
        v-if="showState == 20"
        @click="toLast"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 20
    };
  },
  methods: {
    toNext() {
      this.showState += 10;
    },
    toLast() {
      this.showState -= 10;
    }
  }
};
</script>

<style lang="scss">
.myachieve {
  width: 100%;
  height: 100%;
  //   background: red;
  .lv1 {
    background: url("../assets/img/achieve/lv1-bc.png") no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .lv1_con {
      background: url("../assets/img/achieve/lv1_con-bg.png") no-repeat;
      background-size: contain;
      height: 3.96rem;
      width: 6.45rem;
      margin-top: 1.17rem;
      margin-left: 0.85rem;
      color: #000;
      text-align: left;
      overflow: hidden;
      padding-top: 1.1rem;
      padding-left: 0.36rem;
      .con_title,
      .con_detail {
        width: 5.57rem;
      }
      .detail_des {
        line-height: 0.46rem;
        border-bottom: 1px #57361d solid;
        display: inline-block;
      }
    }
    .next_img {
      height: 0.69rem;
      width: 0.66rem;
      position: absolute;
      top: 2.72rem;
      right: 0.22rem;
    }
    .last_img {
      left: 0.19rem;
    }
    .lv1_next{
        margin-top: .29rem;
        margin-left: 1.02rem;
        overflow: hidden;
        display: flex;
        .lv1_left_top{
            background: url("../assets/img/achieve/lv1_top.png") no-repeat;
            background-size: contain;
            height: 3.39rem;
            width: 6.20rem;
        }
        .lv1_left_bottom{
            background: url("../assets/img/achieve/lv1_bottom.png") no-repeat;
            background-size: contain;
            height: 2.07rem;
            width: 6.20rem;
            margin-top: .22rem;
        }
        .lv1_next_right{
            background: url("../assets/img/achieve/lv1_right.png") no-repeat;
            background-size: contain;
            height: 5.72rem;
            width: 5.71rem;
            margin-left: .27rem;
        }
    
    }
  }
}
</style>
