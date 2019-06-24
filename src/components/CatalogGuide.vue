<template>
  <div class="catalog_guide">
    <div class="guide_wrap">
      <img src="../assets/img/alphabet/icon5.png" alt class="iconimg5" />
      <div class="guide_des">
        <p class="des_title">Hi，亲爱的家长朋友：</p>
        <p class="des_detail">
          根据您填写的信息，为了更好的帮助您的孩子学习英语，现进行一个英语水平测试，系统会通过测试结果，向您推荐最适合您孩子的英语教材。
        </p>
      </div>
      <div class="btn four_bd">跳过</div>
    </div>
    <div class="start_btn">开始测评</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.catalog_guide {
  overflow: hidden;
  .guide_wrap {
    display: flex;
    margin-top: 0.5rem;
    margin-left: 1.04rem;
    position: relative;
    .iconimg5 {
      height: 3.59rem;
      width: 4.14rem;
    }
    .guide_des {
      margin-left: 0.71rem;
      text-align: left;
      width: 6.16rem;
      .des_title {
        font-size: 0.4rem;
        font-family: PingFang-SC-Heavy;
        font-weight: 800;
        color: rgba(0, 0, 0, 1);
        margin-top: 0.93rem;
      }
      .des_detail {
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 0.38rem;
        margin-top: 0.5rem;
      }
    }
    .btn {
      position: absolute;
      right: 0.89rem;
      top: 0.1rem;
      width: 1.1rem;
      height: 0.58rem;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.28rem;
      font-family: PingFang-SC-Heavy;
      font-weight: 800;
      color: rgba(0, 0, 0, 1);
      &:before {
      border-color: rgba(204, 204, 204, 1);
      border-radius: 0.58rem;
    }
    }
    // .btn:
  }
  .start_btn {
    width: 5.84rem;
    height: 0.98rem;
    background: rgba(255, 206, 10, 1);
    border-radius: 0.1rem;
    margin: 0.42rem auto 0;
    font: size 0.36rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
}
</style>
