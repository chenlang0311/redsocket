<template>
  <div class="about">
    <div class="wrap">
      <div class="content">“Look!I have spots”said the giraffe.</div>
      <div class="next"></div>
    </div>
    <div class="btn_group">
      <img src="../assets/img/shengyin.png" alt="声音按钮" class="sy_btn">
      <img src="../assets/img/luyin.png" alt="录音按钮" class="ly_btn">
    </div>
   <input type="file" accept="audio/*" capture="microphone">
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  background-color: red;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 99999;
  .btn_group {
    margin-top: .20rem;
    margin-bottom: .26rem;
    .ly_btn {
      height: 1.13rem;
      width: 1.10rem;
    }
    .sy_btn {
      height: 1.13rem;
      width: 1.10rem;
      margin-right: 1.60rem
    }
  }
  .wrap {
    display: flex;
    align-items: center;
    margin: 1.25rem 0 0 1.65rem;
    .content {
      width: 10.05rem;
      height: 3.36rem;
      background: rgba(247, 247, 247, 1);
      border: .14rem solid rgba(255, 255, 255, 1);
      box-shadow: 0 .05rem 0 0 rgba(215, 248, 251, 0.65);
      border-radius: .49rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:.50rem;
      font-weight:bold;
      margin-right: .69rem;
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

