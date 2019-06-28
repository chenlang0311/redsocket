<template>
  <div class="emerge-test">
    <div class="sort_num">
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
    <!-- <div class="early_next wrap_bg" v-if="showState == 40">
      <div class="early_next_top">
        <div
          class="early_next_top-item f28 fwb"
          v-for="(item, i) in early40ListQ"
          :key="i"
        >{{ i + 1 }}</div>
      </div>
      <div class="early_next_bottom">
        <div
          class="early_next_bottom-item f38 fwb cfff"
          v-for="(item, i) in early40ListA"
          :key="i"
        >{{ item }}</div>
      </div>
    </div>
    <div class="early_next_btn cfff fwb" v-if="showState == 40">提交</div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 40,
      maxState: 60,
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
      eraly40ListA: [{ idx: "1", val: "bird" }, { idx: "2", val: "bird" }]
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
  .wrap_bg {
    background: rgba(247, 247, 247, 1);
    border: 0.14rem solid rgba(255, 255, 255, 1);
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
      padding-top: .65rem;
      padding-left: .54rem;
      .q_des {
          margin-bottom: .30rem;
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
        margin-bottom:.28rem; 
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
  .early_con {
    width: 9.9rem;
    height: 4.63rem;
    margin: 0.76rem auto 0;
    flex-direction: row;
    &_left {
      height: 1.95rem;
      width: 2.64rem;
      background-color: #f4f4f4;
      border-radius: 0.14rem;
      overflow: hidden;
      margin-left: 0.44rem;
    }
    &_right {
      margin-left: 0.6rem;
      text-align: left;
      .item {
        display: inline-block;
        margin-top: 0.45rem;
        line-height: 1;
        margin-right: 0.49rem;
      }
    }
  }

  .early_next {
    width: 10.63rem;
    height: 4.33rem;
    margin: 0.69rem auto 0;
    &_top {
      width: 8.74rem;
      height: 1.2rem;
      background: rgba(247, 247, 247, 1);
      border: 0.02rem dashed rgba(204, 204, 204, 1);
      border-radius: 0.06rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 0.26rem;
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
      justify-content: space-between;
      width: 9.84rem;
      height: 1.72rem;
      background: rgba(247, 247, 247, 1);
      border: 0.02rem dashed rgba(204, 204, 204, 1);
      margin: 0.44rem auto 0;
      padding: 0 0.37rem;
      &-item {
        height: 1.36rem;
        width: 1.36rem;
        border-radius: 0.06rem;
        background-color: #fff;
      }
    }
  }
}
</style>
