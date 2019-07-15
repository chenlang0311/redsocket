<template>
  <div class="emerge-test">
    <div class="sort_num" v-if="showState==10||showState==30||showState==40">
      <img src="../assets/img/early2/biaoqian.png" class="bg_img">
      <p class="sort_num_des">1/5</p>
    </div>
    <img src="../assets/img/alphabet/left.png" alt class="jiantou_next jiantou_last" @click="last">
    <img src="../assets/img/alphabet/jiantou-icon.png" alt class="jiantou_next" @click="next">
    <div class="early_con_10" v-if="showState == 10">
      <div class="early_con_10_left wrap_bg fw4">am</div>
      <div class="early_con_10_right f36 fw4 wrap_bg">
        <div>
          <span class="lv1_left_top_bd"></span> m
        </div>
        <div class="answer_item">
          <div class="item f48 fw4" v-for="(item, i) in eraly10List" :key="i">{{ item }}</div>
        </div>
      </div>
    </div>

    <div class="early_con_30 wrap_bg" v-if="showState == 30">
      <div class="early_con_30_top f40 fw4">“I am big” said the kangaroo.</div>
      <div class="early_con_30_bottom">
        <div class="item" v-for="(item,i) in eraly30List" :key="i">
          <div class="answer_idx f24">{{item.idx}}</div>
          <img :src="item.src" alt class="answer_img">
        </div>
      </div>
    </div>
    <img
      src="../assets/img/alphabet/shengyin-icon.png"
      class="sy_icon"
      v-if="showState == 30||showState == 10"
    >
    <div class="early_con_20" v-if="showState == 20">
      <div class="early_con_20_left wrap_bg">
        <div class="con_q">
          <div class="con_q_item f46 cfff" v-for="(item,i) in eraly20ListQ" :key="i">{{item}}</div>
        </div>
        <div class="game_wrap">
          <div
            class="game_item f36 fw4"
            :class="i<3?'game_item_active':''"
            v-for="(item,i) in eraly20ListA"
            :key="i"
          >{{item}}</div>
        </div>
      </div>
      <div class="early_con_20_right wrap_bg">
        <img src="../assets/img/emergent/shalou.png" alt class="shalou_img">
        <div class="count_time f38 fw4">00:00:00</div>
      </div>
    </div>
    <div class="early_con_40" v-if="showState == 40">
      <div class="early_con_40_left wrap_bg">
        <img src alt class="q_img">
      </div>
      <div class="early_con_40_right wrap_bg">
        <div class="q_des f36 fw4">
          “I am
          <span class="lv1_left_top_bd"></span>” said the crocodile .
        </div>
        <div class="q_item fw4" v-for="(item,i) in eraly40ListA" :key="i">
          <span class="answer_idx">{{item.idx}}</span>
          {{item.val}}
        </div>
      </div>
    </div>
    <div class="early_con_50" v-if="showState == 50"></div>
    <div class="btn_group" v-if="showState == 50">
      <div class="btn_group_item cfff fwb">
        <img src="../assets/img/emergent/luyin.png" alt class="ly_img">
        Record
      </div>
      <div class="btn_group_item cfff fwb sy_btn">
        <img src="../assets/img/emergent/shengyin.png" alt class="sy_img">
        Listen
      </div>
    </div>
    <div class="early_con_60" v-if="showState == 60">
      <div class="card_wrap">
        <img
          src="../assets/img/emergent/card.png"
          alt
          class="card_img"
          v-for="(item,i) in eraly60ListA"
          :key="i"
        >
      </div>
    </div>
    <div class="early_con_60" v-if="showState == 70">
      <div class="card_wrap">
        <img
          :src="item.src"
          alt
          class="card_img card_item"
          v-for="(item,i) in eraly70ListQ"
          :key="i"
        >
        <div class="card_item f30 fw4" v-for="(item,i) in eraly70ListQ"   :key="i+0.1">
            {{item.name}}
        </div>
      </div>
    </div>
    <div class="early_con_80" v-if="showState == 80">
        <div class="con_diago">
          <div class="diago_des">
<p  class="f32 fw5">已生成完整音频！</p>
          </div>
            
            <div class="btn_g ">
                <div class="btn_i cfff f32">一键分享</div>
                <div class="btn_i cfff f32">下载</div>
            </div>
        </div>
        <img src="../assets/img/emergent/xx.png" alt="" class="xx_img">
    </div>
    <img src="../assets/img/emergent/dianchi.png" alt class="dc_img" v-if="showState == 60||showState == 70">
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      showState: 80,
      maxState: 80,
      earlyList: [],
      eraly10List: ["m", "b", "a", "s"],
      eraly20ListQ: ["am", "said", "the", "big"],
      eraly20ListA: [
        "A",
        "c",
        "d",
        "g",
        "t",
        "D",
        "E",
        "a",
        "z",
        "q",
        "w",
        "c",
        "d",
        "t",
        "A",
        "B",
        "t",
        "j",
        "Y",
        "r",
        "A",
        "j",
        "B",
        "t",
        "d",
        "a",
        "a",
        "A",
        "b",
        "h",
        "K",
        "a",
        "a",
        "A",
        "a",
        "A"
      ],
      eraly30List: [
        { idx: "A", src: "" },
        { idx: "B", src: "" },
        { idx: "C", src: "" },
        { idx: "D", src: "" }
      ],
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
      eraly40ListA: [{ idx: "1", val: "bird" }, { idx: "2", val: "bird" }],
      eraly60ListA: [1, 2, 3, 4, 5, 6, 7, 8],
      eraly70ListQ:[{name:"kangaroo",src:""},{name:"gorilla",src:""},{name:"baer",src:""},{name:"horse",src:""}]
    };
  },
  methods: {
    last() {
      if (this.showState - 10 > 0) {
        this.showState = this.showState - 10;
      }
    },
    next() {
      if (this.showState < this.maxState) {
        this.showState += 10;
      }
    }
  }
};
</script>

<style lang="scss">
.emerge-test {
  height: 100%;
  width: 100%;
  background: url("../assets/img/emergent/bc.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .dc_img {
    height: 1.06rem;
    width: 0.61rem;
    position: absolute;
    top: 0.37rem;
    right: 0.25rem;
  }
  .wrap_bg {
    background: rgba(247, 247, 247, 1);
    border: 0.14rem solid rgba(255, 255, 255, 1);
    box-shadow: 0 0.05rem 0 0 rgba(215, 248, 251, 0.65);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .sy_icon {
    height: 1.1rem;
    width: 1.1rem;
    margin: 0.22rem auto 0;
  }
  .btn_group {
    margin: 0.25rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &_item {
      width: 2.1rem;
      height: 0.59rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("../assets/img/emergent/button3.png") no-repeat;
      background-size: 100% 100%;
      border-radius: 0.1rem;
      .ly_img {
        height: 0.39rem;
        width: 0.27rem;
        margin-right: 0.19rem;
      }
      .sy_img {
        height: 0.38rem;
        width: 0.38rem;
        margin-right: 0.18rem;
      }
    }
    .sy_btn {
      background: url("../assets/img/emergent/button4.png") no-repeat;
      background-size: 100% 100%;
      background-color: none;
      box-shadow: none;
      margin-left: 0.3rem;
    }
  }
  .lv1_left_top_bd {
    border-bottom: 1px solid #333;
    width: 1.89rem;
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
  .early_con_10 {
    width: 10.33rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.22rem;
    margin-left: 1.5rem;
    &_left {
      height: 3.41rem;
      width: 3.52rem;
      font-size: 1.49rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &_right {
      width: 6.21rem;
      height: 3.41rem;
      align-items: flex-start;
      padding-left: 0.56rem;
      padding-top: 0.45rem;
      .answer_item {
        display: flex;
        margin-top: 0.63rem;
        .item {
          width: 0.98rem;
          height: 0.98rem;
          line-height: 0.98rem;
          text-align: center;
          border: 1px solid rgba(179, 179, 179, 1);
          margin-right: 0.31rem;
        }
      }
    }
  }
  .early_con_30 {
    width: 10.35rem;
    height: 3.61rem;
    margin: 1.04rem auto 0;
    align-items: flex-start;
    padding-left: 0.42rem;
    &_top {
      margin-top: 0.85rem;
      line-height: 1;
    }
    &_bottom {
      margin-top: 0.6rem;
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        margin-right: 0.32rem;
      }
      .answer_idx {
        width: 0.33rem;
        height: 0.33rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 204, 0, 1);
        margin-right: 0.11rem;
      }
      .answer_img {
        width: 1.63rem;
        height: 0.99rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.06rem;
      }
    }
  }
  .early_con_20 {
    margin-top: 0.47rem;
    margin-left: 1.56rem;
    display: flex;
    &_left {
      width: 7.95rem;
      height: 5.37rem;
      margin-right: 0.3rem;
      flex-direction: row;
      .con_q {
        margin: 0 0.52rem;
        &_item {
          height: 0.66rem;
          width: 1.25rem;
          border-radius: 0.06rem;
          background: rgba(103, 58, 93, 1);
          text-align: center;
          line-height: 0.66rem;
          margin-bottom: 0.18rem;
        }
      }
      .game_wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 4.56rem;
        .game_item {
          width: 0.66rem;
          height: 0.66rem;
          border: 0.02rem solid rgba(87, 54, 29, 1);
          border-radius: 0.33rem;
          line-height: 0.66rem;
          text-align: center;
          color: rgba(87, 54, 29, 1);
          margin-bottom: 0.09rem;
        }
        .game_item_active {
          background: rgba(108, 69, 255, 1);
          color: #fff;
          border: none;
        }
      }
    }
    &_right {
      width: 2.09rem;
      height: 2.49rem;
      .shalou_img {
        height: 0.92rem;
        width: 0.5rem;
        margin-top: 0.34rem;
      }
      .count_time {
        margin-top: 0.29rem;
      }
    }
  }
  .early_con_40 {
    display: flex;
    align-items: center;
    margin-top: 1.22rem;
    margin-left: 1.07rem;
    &_left {
      height: 3.36rem;
      width: 4.24rem;
      margin-right: 0.25rem;
      .q_img {
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 0.14rem;
      }
    }
    &_right {
      height: 3.36rem;
      width: 6.52rem;
      align-items: flex-start;
      padding-top: 0.65rem;
      padding-left: 0.54rem;
      .q_des {
        margin-bottom: 0.3rem;
        .lv1_left_top_bd {
          border-bottom: 1px solid #333;
          width: 1.04rem;
          display: inline-block;
          text-align: center;
        }
      }
      .q_item {
        display: flex;
        align-items: center;
        margin-bottom: 0.28rem;
        .answer_idx {
          width: 0.33rem;
          height: 0.33rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 204, 0, 1);
          margin-right: 0.11rem;
        }
      }
    }
  }
  .early_con_50 {
    height: 5.01rem;
    width: 10.6rem;
    background-color: #fff;
    margin: 0.21rem auto 0;
  }
  .early_con_60 {
    margin-top: 0.67rem;
    .card_wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 2.76rem;
      margin-right: 3.03rem;
      min-width: 7.55rem;
      .card_img {
        height: 2.34rem;
        width: 1.83rem;
        margin-bottom: 0.21rem;
      }
      .card_item {
        width: 1.82rem;
        height: 2.28rem;
        background: rgba(255, 255, 255, 1);
        border: 0.12rem solid rgba(245, 245, 245, 1);
        border-radius: 0.16rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .early_con_80{
      height: 100%;
        width: 100%;
        background:rgba(0,0,0,.6);
        display: flex;
        align-items: center;
        flex-direction: column;
        .con_diago{
            height: 4.10rem;
            width: 4.44rem;
            background: url("../assets/img/emergent/tanchuang.png") no-repeat;
            background-size: 100% 100%;
            margin-top: .76rem;
            .diago_des{
                margin: 2.24rem auto 0;
                padding-top: .14rem;
                height: .69rem;
                width: 3.12rem;
                text-align: center;
                p{
                  line-height: 1;
                  background:rgba(254,145,131,.41);
                border-radius: 50%;
                }
            }
            .btn_g{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: .37rem;
                margin-left: .30rem;
                .btn_i{
                    background: url("../assets/img/emergent/button5.png") no-repeat;
                    background-size: 100% 100%;
                    height: .73rem;
                    width: 1.80rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: .22rem;
                }
            }

        }
        .xx_img{
            height: .58rem;
            width: .58rem;
            margin: .21rem auto 0;
        }
  }
}
</style>
