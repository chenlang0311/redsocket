<template>
  <div class="early4-test">
    <div class="sort_num">
      <img src="../assets/img/early2/biaoqian.png" class="bg_img" />
      <p class="sort_num_des">1/5</p>
    </div>
    <img
      src="../assets/img/alphabet/left.png"
      alt
      class="jiantou_next jiantou_last"
      @click="last"
    />
    <img
      src="../assets/img/alphabet/jiantou-icon.png"
      alt
      class="jiantou_next"
      @click="next"
    />
    <div class="early_con_9 wrap_bg" v-if="showState == 10">
      <img class="early_con_9_top" src="" />
      <div class="early_con_9_mid">
        <div class="item f26 fw4 cfff" v-for="(item, i) in earlyListQ" :key="i">
          {{ item.f }}
        </div>
      </div>
      <div class="early_con_9_bottom">
        <div class="item f26 fw4 cfff" v-for="(item, i) in earlyListA" :key="i">
          {{ item.f }}
        </div>
      </div>
    </div>

    <div class="early_con_20 wrap_bg" v-if="showState == 20">
      <div class="early_con_20_top">
        <div class="item f30 fw4" v-for="(item, i) in early20ListQ" :key="i">
          {{ item }}
        </div>
      </div>
      <div class="early_con_20_bottom">
        <div class="item" v-for="(item, i) in early20ListA" :key="i">
          <div class="apl f40 fw4 cfff">{{ item.apl }}</div>
          <div class="num f30">{{ item.num }}</div>
        </div>
      </div>
    </div>

    <div class="early_con wrap_bg" v-if="showState == 30">
      <div class="early_con_left"></div>
      <div class="early_con_right f36 fw4">
        <div>I want to<span class="lv1_left_top_bd"></span> it here by myself.
        </div>
        <span class="item f32 fw4" v-for="(item, i) in eraly30ListA" :key="i">
          {{ item.idx }}.{{item.val}}
        </span>
      </div>
    </div>

    <div class="early_next wrap_bg" v-if="showState == 40">
      <div class="early_next_top">
        <div
          class="early_next_top-item f28 fwb"
          v-for="(item, i) in early40ListQ"
          :key="i"
        >
          {{ i + 1 }}
        </div>
      </div>
      <div class="early_next_bottom">
        <div
          class="early_next_bottom-item f38 fwb cfff"
          v-for="(item, i) in early40ListA"
          :key="i"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="early_next_btn cfff fwb" v-if="showState == 40">提交</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 10,
      maxState: 40,
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
      early40ListQ:[1,2,3,4,5],
      early40ListA:[{},{},{},{},{},{}],

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
.early4-test {
  height: 100%;
  width: 100%;
  background: url("../assets/img/early4/bc.png") no-repeat;
  background-size: contain;
  position: relative;
  overflow: hidden;
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
  }
  .jiantou_last {
    left: 0.3rem;
  }
  .early_con_9 {
    width: 9.6rem;
    height: 4.63rem;
    margin: 0.36rem auto 0;
    &_top {
      height: 1.54rem;
      width: 2.09rem;
      margin-top: 0.21rem;
      background-color: #fff;
      border-radius: 0.14rem;
    }
    &_mid {
      display: flex;
      align-items: center;
      margin-top: 0.22rem;
      .item {
        width: 0.88rem;
        height: 0.88rem;
        background: rgba(126, 106, 176, 1);
        border-radius: 0.1rem;
        text-align: center;
        line-height: 0.88rem;
        margin-right: 0.14rem;
      }
      :nth-child(3) {
        margin-right: 1.05rem;
      }
    }
    &_bottom {
      margin-top: 0.32rem;
      display: flex;
      align-items: center;
      .item {
        width: 0.88rem;
        height: 0.88rem;
        background: rgba(236, 66, 73, 1);
        box-shadow: 0px 0.04rem 0px 0px rgba(220, 39, 46, 1);
        border-radius: 0.1rem;
        text-align: center;
        line-height: 0.88rem;
        margin-right: 0.17rem;
      }
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
    width: 9.9rem;
    height: 4.63rem;
    margin: 0.76rem auto 0;
    flex-direction: row;
    &_left{
        height: 1.95rem;
        width: 2.64rem;
        background-color: #f4f4f4;
        border-radius: .14rem;
        overflow: hidden;
        margin-left: .44rem;
    }
    &_right{
        margin-left: .60rem;
        text-align: left;
        .item{
            display: inline-block;
            margin-top: .45rem;
            line-height: 1;
            margin-right: .49rem;
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
      justify-content:space-between;
      width: 9.84rem;
      height: 1.72rem;
      background: rgba(247, 247, 247, 1);
      border: 0.02rem dashed rgba(204, 204, 204, 1);
      margin: 0.44rem auto 0;
      padding: 0 .37rem;
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
