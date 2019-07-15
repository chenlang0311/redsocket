<template>
  <div class="early1-test">
    <div class="sort_num">
      <img src="../assets/img/early2/biaoqian.png" class="bg_img">
      <p class="sort_num_des">1/5</p>
    </div>
    <img src="../assets/img/alphabet/left.png" v-if="showState!=10" class="jiantou_next jiantou_last" @click="last">
    <img src="../assets/img/alphabet/jiantou-icon.png" alt class="jiantou_next" @click="next">
    <div class="early_con_10" v-if="showState == 10">
      <div class="early_con_10_top">
        <div class="q_img_wrap">
          <img src="../assets/img/early1/ban1.png" alt class="q_img">
        </div>
        <div class="answer_wrap">
          <div class="answer_des f48 fw4">sun</div>
          <div class="answer_line"></div>
          <div class="answer_q f48">?</div>
        </div>
      </div>
      <div class="early_con_10_btngroup">
        <div class="en_btn al_btn">
          English
          <img src="../assets/img/early1/duigou.png" alt class="right_img">
        </div>
        <div class="fy_btn al_btn">翻译</div>
        <div class="zd_btn al_btn">自动</div>
        <div class="cf_btn al_btn">
          重复次数:
          <span class="c122">0/5</span>
        </div>
        <div class="sd_btn al_btn">
          播放速度:
          <span class="c122">正常</span>
        </div>
      </div>
      <img src="../assets/img/alphabet/shengyin-icon.png" alt class="sy_btn">
    </div>
<div class="early_con_10" v-if="showState == 20">
      <div class="early_con_10_top">
        <div class="q_img_wrap">
          <img src="" alt class="q_img">
        </div>
        
        <div class="answer_wrap">
          <div class="answer_des f48 fw4">kangaroo</div>
          <div class="answer_line"></div>
          <div class="answer_q f48">?</div>
        </div>
      </div>
      <div class="early_con_10_btngroup">
        <div class="en_btn al_btn">
          English
          <img src="../assets/img/early1/duigou.png" alt class="right_img">
        </div>
        <div class="fy_btn al_btn">翻译</div>
        <!-- <div class="zd_btn al_btn">自动</div> -->
        <div class="cf_btn al_btn">
          重复次数:
          <span class="c122">0/5</span>
        </div>
        <div class="sd_btn al_btn">
          播放速度:
          <span class="c122">正常</span>
        </div>
      </div>
      <img src="../assets/img/alphabet/luyin.png" alt class="sy_btn">
    </div>

    <div class="early_con wrap_bg" v-if="showState == 30">
      <div class="item" v-for="(item,i) in  early30List" :key="i">

      </div>
      
    </div>
<img src="../assets/img/alphabet/shengyin-icon.png" alt class="sy_btn" v-if="showState == 30">
    <div class="early_next wrap_bg" v-if="showState == 40">
      <div class="early_next_top">
        <div
          class="early_next_top-item f28 fwb"
          v-for="(item, i) in early40List"
          :key="i"
        >{{ i + 1 }}</div>
      </div>
        <div class="early_next_bottom">
            <div class="early_next_bottom-item f51 fwb cfff" v-for="(item,i) in early40List" :key="i">{{item}}</div>
        </div>
    </div>
    <div class="early_result" v-if="showState==50">
      <img src="../assets/img/early1/guidao.png" alt="" class="guidao_img">
      <img src="../assets/img/early1/che1.png" alt="" class="che1_img">
      <img src="../assets/img/early1/che2.png" alt="" class="che2_img">
    </div>
    <img src="../assets/img/alphabet/shengyin-icon.png" alt class="sy_btn sy_btn40" v-if="showState == 40">
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 50,
      maxState: 50,
      early40List:["the","Here is","Food"],
      earlyList: [],
      earlyListQ: [
        { f: "h" },
        { f: "" },
        { f: "" },
        { f: "b" },
        { f: "" },
        { f: "" },
        { f: "" }
      ],
      earlyListA: [
        { f: "t" },
        { f: "a" },
        { f: "d" },
        { f: "o" },
        { f: "i" },
        { f: "l" },
        { f: "l" }
      ],
      early20ListQ: [
        "a=1",
        "w=2",
        "e=3",
        "o=4",
        "s=5",
        "d=6",
        "f=7",
        "i=8",
        "u=9",
        "h=10",
        "c=11",
        "p=12",
        "r=13",
        "d=14",
        "l=15",
        "n=16",
        "t=17"
      ],
      early20ListA: [
        { num: 10, alp: "faw" },
        { num: 3, alp: "" },
        { num: 15, alp: "" },
        { num: 12, alp: "" }
      ],
      eraly30ListA: [
        { idx: "A", val: "catch" },
        { idx: "B", val: "hit" },
        { idx: "C", val: "sail" },
        { idx: "D", val: "build" }
      ],
      early30List:[1,2,3,4],
      early40ListQ: [1, 2, 3, 4, 5],
      early40ListA: [{}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    last() {
       console.log("last")
      if (this.showState - 10 > 0) {
        this.showState = this.showState - 10;
      }
    },
    next() {
      console.log("next")
      if (this.maxState-this.showState >0) {
        this.showState += 10;
      }
    }
  }
};
</script>

<style lang="scss">
.early1-test {
  height: 100%;
  width: 100%;
  background: url("../assets/img/early1/bc.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .early_result{
    img{
      position: absolute;
    }
    .guidao_img{
      height: 4.47rem;
      width: 100%;
      bottom: 0;
    }
    .che1_img{
      height: 1.70rem;
      width: 2.41rem;
      bottom: 2.83rem;
      left: 3.38rem;
    }
    .che2_img{
      height: 1.62rem;
      width: 2.58rem;
      left: 1.46rem;
      bottom: 2.31rem;
    }
  }
  .wrap_bg {
    background: rgba(255, 255, 255, 1);
    border: 0.14rem solid rgba(247, 247, 247, 1);
    box-shadow: 0 0.05rem 0 0 rgba(215, 248, 251, 0.65);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .dianchi_img {
    height: 1.06rem;
    width: 0.58rem;
    position: absolute;
    right: 0.57rem;
    top: 4.6rem;
  }
  .early_next_btn {
    width: 2.1rem;
    height: 0.55rem;
    background: rgba(255, 99, 83, 1);
    box-shadow: 0px 0.04rem 0px 0px rgba(238, 73, 56, 1);
    border-radius: 0.1rem;
    text-align: center;
    line-height: 0.55rem;
    margin: 0.19rem auto 0;
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
    z-index: 100;
  }
  .jiantou_last {
    left: 0.3rem;
  }
  .early_con_10 {
    overflow: hidden;
    &_top {
      display: flex;
      margin-top: 0.45rem;
      .q_img_wrap{
        height: 3.36rem;
        width: 4.85rem;
        background:rgba(247,247,247,1);
        border:.14rem solid rgba(255,255,255,1);
        box-shadow:0px .05rem 0px 0px rgba(215,248,251,0.65);
        border-radius:.49rem;
        margin-left: 1.42rem;
        margin-right: 0.63rem;
        .q_img{
          height: 100%;
          width: 100%;
          border-radius:.49rem;
          overflow: hidden;
        }
      }
      .q_img_wrap,
      .answer_wrap {
        height: 3.41rem;
        width: 4.85rem;
      }
      .answer_wrap {
        background: url("../assets/img/early1/ban1_1.png") no-repeat;
        background-size: 100% 100%;
        padding-top: 0.95rem;

        .answer_des {
          line-height: 0.21rem;
        }
        .answer_line {
          width: 2.79rem;
          height: 0.02rem;
          background: rgba(51, 51, 51, 1);
          margin: 0.52rem auto;
        }
        .answer_q {
          line-height: 0.21rem;
        }
      }
    }
    &_btngroup {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.19rem;
      .al_btn{
        display: flex;
        align-items: center;
        height: .55rem;
        background:rgba(126,106,176,1);
        box-shadow:0px .04rem 0px 0px rgba(115,94,168,1);
        border-radius:.10rem;
        min-width: 1.60rem;
        justify-content: center;
        color: #fff;
        font-weight: 400;
        margin-right: .20rem;
        font-size: .28rem;
        padding: 0 .19rem;
        .right_img{
          height: .22rem;
          width: .28rem;
          margin-left: .17rem;
        }
      }
    }
    .sy_btn{
      height: 1.10rem;
      width: 1.10rem;
      margin:  .27rem auto 0;
    }
  }

  .early_con_20 {
    width: 9.9rem;
    height: 4.68rem;
    margin: 0.76rem auto 0;
    &_top {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 0.45rem;
      width: 8rem;
      .item {
        margin-right: 0.32rem;
      }
    }
    &_bottom {
      margin-top: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 8.3rem;
      .item {
        text-align: center;
      }
      .apl {
        width: 1.8rem;
        height: 1.2rem;
        background: rgba(92, 126, 109, 1);
        border-radius: 0.16rem;
        text-align: center;
        line-height: 1.2rem;
      }
      .num {
        width: 0.72rem;
        height: 0.47rem;
        background: rgba(255, 204, 0, 1);
        border-radius: 0.07rem;
        text-align: center;
        line-height: 0.47rem;
        margin: 0.21rem auto 0;
      }
    }
  }

  .early_con {
    width: 11.09rem;
    height: 3.17rem;
    margin: 1.33rem auto 0;
    flex-direction: row;
    padding-left: .54rem;
    .item{
      height: 1.52rem;
      width: 2.07rem;
      margin-right: .50rem;
      border-radius: .12rem;
      background: #ddd;
    }
    
  }
.sy_btn{
      height: 1.10rem;
      width: 1.10rem;
      margin:  .37rem auto 0;
    }
    .sy_btn40{
      margin-top: .55rem;
    }
  .early_next {
    width: 7.04rem;
    height: 3.53rem;
    margin: 0.73rem auto 0;
    &_top {
      width: 5.67rem;
      height: 1.05rem;
      background: rgba(247, 247, 247, 1);
      border: 0.02rem dashed rgba(204, 204, 204, 1);
      border-radius: 0.06rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 0.40rem;
      &-item {
        height: 0.38rem;
        width: 0.38rem;
        border: 0.02rem solid rgba(51, 51, 51, 1);
        border-radius: 50%;
        line-height: 0.38rem;
      }
    }
     &_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 5.67rem;
        margin: .52rem auto 0;
        &-item{
            height: .88rem;
            border-radius: .06rem;
            background-color: rgba(0,193,183,1);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 .20rem;
        }
    }
  }
}
</style>
