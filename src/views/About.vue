<template>
  <div class="about">
    <div class="wrap">
      <div class="content"></div>
      <div class="next"></div>
    </div>
    <div class="btn_group">
      <img src="../assets/img/shengyin.png" alt="声音按钮" class="sy_btn">
      <img src="../assets/img/luyin.png" alt="录音按钮" class="ly_btn">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  background-color: red;
  width: 100%;
  .btn_group {
    margin-top: .22rem;
    .ly_btn {
      height: 1.13rem;
      width: 1.00rem;
    }
    .sy_btn {
      height: 1.13rem;
      width: 1.00rem;
      margin-right: 1.60rem
    }
  }
  .wrap {
    display: flex;
    align-items: center;
    .content {
      width: 10.05rem;
      height: 3.36rem;
      background: rgba(247, 247, 247, 1);
      border: .14rem solid rgba(255, 255, 255, 1);
      box-shadow: 0 .05rem 0 0 rgba(215, 248, 251, 0.65);
      border-radius: .49rem;
      margin: 1.26rem auto 0;
    }
    .next {
      background: rgb(71, 42, 151);
      height: .66rem;
      width: .66rem;
      border-radius: 50%;
    }
  }
}
</style>

