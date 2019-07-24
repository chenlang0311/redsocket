<template>
  <div class="early3-test">
    <div class="sort_num">
      <img src="../assets/img/early2/biaoqian.png" class="bg_img">
      <p class="sort_num_des">1/4</p>
    </div>
    <img src="../assets/img/alphabet/left.png" alt class="jiantou_next jiantou_last" @click="last">
    <img src="../assets/img/alphabet/jiantou-icon.png" alt class="jiantou_next" @click="next">
    <div class="early_con" v-if="showState==10">
      <div class="early_con_top">
        <div class="circle f24">1</div>
        <div>
          Grace saw a
          <span class="lv1_left_top_bd"></span>coming out of its cave.
        </div>
      </div>
      <div class="early_con_bottom">
        <div class="item" v-for="(item,i) in eraly10List" :key="i">
          <div class="answer_idx f24">{{item.idx}}</div>
          <img :src="item.src" alt class="answer_img">
        </div>
      </div>
    </div>

    <div class="early_next" v-if="showState==20">
      <div class="early_next_top">
        <div class="early_next_top-item f28 fwb" v-for="(item,i) in earlyList" :key="i">{{i+1}}</div>
      </div>
      <div class="early_next_bottom">
        <div
          class="early_next_bottom-item f38 fwb cfff"
          v-for="(item,i) in earlyList"
          :key="i"
        >{{item}}</div>
      </div>
    </div>
    <div class="early_next_btn f28 fwb cfff" v-if="showState==20">提交</div>
    <div class="early_next_2" v-if="showState==30">
        <div class="early_next_2_top f32 fw4">Look! Some baby spiders are coming out.</div>
        <div class="early_next_2_bottom">
            <div class="item" v-for="(item,i) in eraly30List" :key="i"></div>
        </div>
    </div>
    <img src="../assets/img/early3/dianchi.png" alt="" class="dianchi_img" v-if="showState==30">
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 30,
      maxState:30,
      earlyList: [{},{},{},{},{}],
      eraly10List: [
        { idx: "A", src: "" },
        { idx: "B", src: "" },
        { idx: "C", src: "" }
      ],
      eraly30List:[{},{},{},{}]
    };
  },
  methods: {
    last() {
        if(this.showState-10>0){
            this.showState = this.showState -10;
        }
      
    },
    next() {
        if(this.showState<this.maxState){
        this.showState += 10;
        }
      
    }
  }
};
</script>

<style lang="scss">
.early3-test {
  height: 100%;
  width: 100%;
  background: url("../assets/img/early3/bc.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .dianchi_img{
      height: 1.06rem;
      width: .58rem;
      position: absolute;
      right: .57rem;
      top: 4.60rem;
  }
  .early_next_btn{
      width:2.10rem;
        height:.55rem;
        background:rgba(255,99,83,1);
        box-shadow:0px .04rem 0px 0px rgba(238,73,56,1);
        border-radius:.1rem;
        text-align: center;
        line-height: .55rem;
        margin: .19rem auto 0;
  }
  .lv1_left_top_bd {
    border-bottom: 1px solid #333;
    width: 0.56rem;
    display: inline-block;
    text-align: center;
  }
  .sort_num {
    height: 1.12rem;
    width: 1.47rem;
    position: absolute;
    top: -0.07rem;
    right: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .sort_num_des {
      font-size: 0.42rem;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      z-index: 1;
    }
  }
  .bg_img {
    z-index: 0;
    height: 100%;
    width: 100%;
    position: absolute;
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
  .early_con {
    width: 10.35rem;
    height: 3.36rem;
    background: rgba(247, 247, 247, 1);
    border: 0.14rem solid rgba(255, 255, 255, 1);
    box-shadow: 0 0.05rem 0 0 rgba(215, 248, 251, 0.65);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1.19rem auto 0;
    &_top {
      display: flex;
      align-items: center;
      margin-top: 0.85rem;
      .circle {
        width: 0.26rem;
        height: 0.26rem;
        border: 0.02rem solid rgba(51, 51, 51, 1);
        border-radius: 50%;
        text-align: center;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.16rem;
      }
    }
    &_bottom {
      margin-top: 0.42rem;
      display: flex;
      align-items: center;
      .item{
          display: flex;
          align-items: center;
          margin-right: .40rem;
      }
      .answer_idx {
        width: 0.33rem;
        height: 0.33rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 204, 0, 1);
        margin-right: 0.15rem;
      }
      .answer_img {
        width: 1.63rem;
        height: 1.2rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.06rem;
      }
    }
  }

  .early_next {
    width: 10.01rem;
    height: 4.53rem;
    background: rgba(247, 247, 247, 1);
    border: 0.14rem solid rgba(255, 255, 255, 1);
    box-shadow: 0 0.05rem 0 0 rgba(215, 248, 251, 0.65);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: .60rem auto 0;
    &_top {
      width: 9.06rem;
      height: 1.80rem;
      background: rgba(247, 247, 247, 1);
      border: 0.02rem dashed rgba(204, 204, 204, 1);
      border-radius: 0.06rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 0.32rem;
      &-item {
        height: 0.38rem;
        width: 0.38rem;
        border: 0.02rem solid rgba(51, 51, 51, 1);
        border-radius: 50%;
        line-height: 0.38rem;
      }
    }
    &_bottom {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 9.06rem;
      height: 1.80rem;
      background: rgba(247, 247, 247, 1);
      border: 0.02rem dashed rgba(204, 204, 204, 1);
      margin: 0.22rem auto 0;
      &-item {
        height:1.36rem;
        width: 1.36rem;
        border-radius: 0.06rem;
        background-color: #fff;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // padding: 0 0.2rem;
      }
    }
  }
  .early_next_2{
      width: 6.66rem;
    height: 5.14rem;
    background: rgba(247, 247, 247, 1);
    border: 0.14rem solid rgba(255, 255, 255, 1);
    box-shadow: 0 0.05rem 0 0 rgba(215, 248, 251, 0.65);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: .56rem auto 0;
    &_top{
        margin-top: .48rem;
        line-height: 1;
    }
    &_bottom{
        margin: .30rem auto 0;
        width: 4.76rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        .item{
            height: 1.45rem;
            width: 2.20rem;
            border-radius: .14rem;
            background-color: #fff;
            margin-bottom: .25rem;
        }

    }
  }
}
</style>
