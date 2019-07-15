<template>
  <div class="test_result">
    <img src="../assets/img/alphabet/BC3.png" class="bc_img">
    <div class="wrap" :class="showDes?'wrap_has':''">
      <div class="wrap_title">
        <img src="../assets/img/alphabet/ip3.png" alt class="ip3_img">
        测评完成
      </div>
      <div class="wrap_result">
        <div class="left">
          <p>正确率</p>
          <p class="result_num">80<span class="f30 fw4">%</span>
          </p>
        </div>
        <div class="line"></div>
        <div class="right">
          <p>错题数量</p>
          <p class="result_num">2</p>
        </div>
      </div>
      <p class="result_des" v-if="showDes">您当前测试结果，水平略低于当前水平，给您推荐xxx测试题重新测试评估。</p>
    </div>
    <div class="next_btn btn" v-if="!showDes">下一关</div>
    <div class="btn_group" v-if="showDes">
      <div class="jump_btn btn">跳过测试</div>
      <div class="next_btn btn next_btn2">进行测试</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDes: false
    };
  }
};
</script>

<style lang="scss">
.test_result {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .bc_img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .btn {
    height: 0.73rem;
    width: 1.84rem;
    text-align: center;
    line-height: 0.73rem;
    font-size: 0.36rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
  }
  .btn_group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.3rem;
  }
  .jump_btn {
    background: url("../assets/img/alphabet/button2.png") no-repeat;
    background-size: 100% 100%;
    color: rgba(51, 51, 51, 1);
    margin-right: 1.19rem;
  }
  .next_btn {
    background: url("../assets/img/alphabet/button.png") no-repeat;
    background-size: 100% 100%;
    color: rgba(255, 255, 255, 1);
    margin: 0.46rem auto 0;
  }
  .next_btn2 {
    margin: 0;
  }
  .wrap {
    width: 8.05rem;
    height: 3.65rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0.05rem 0px 0px rgba(255, 208, 73, 1);
    border-radius: 0.2rem;
    margin: 0.86rem auto 0;
    position: relative;
    .wrap_title {
      width: 3.75rem;
      height: 0.7rem;
      background: rgba(254, 107, 29, 1);
      border-radius: 0.35rem;
      position: absolute;
      top: -0.35rem;
      left: 50%;
      margin-left: -1.875rem;
      font-size: 0.36rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 1;
      display: flex;
      align-items: center;
      padding-left: 1.29rem;
      .ip3_img {
        height: 0.77rem;
        width: 0.92rem;
        position: absolute;
        bottom: 0;
        left: 0.09rem;
      }
    }
    .wrap_result {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 3.65rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(141, 71, 59, 1);
      p {
        line-height: 1;
      }
      .line {
        width: 0.05rem;
        height: 0.86rem;
        background-color: rgba(255, 192, 7, 1);
      }
      .left,
      .right {
        width: 4rem;
        .result_num {
          font-size: 0.4rem;
          margin-top: 0.29rem;
          line-height: 1;
        }
      }
    }
    .result_des {
      font-size: 0.26rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(141, 71, 59, 1);
      line-height: 1;
    }
  }
  .wrap_has {
    width: 11.07rem;
    height: 3.8rem;
    .wrap_result {
      height: 2.82rem;
      .right,
      .left {
        width: 5.51rem;
      }
    }
  }
}
</style>
