<template>
  <div class="fiction-test">
    <div class="sort_num">
      <img src="../assets/img/early2/biaoqian.png" class="bg_img">
      <p class="sort_num_des">1/4</p>
    </div>
    <img src="../assets/img/alphabet/left.png" alt class="jiantou_next jiantou_last" @click="last">
    <img src="../assets/img/alphabet/jiantou-icon.png" alt class="jiantou_next" @click="next">
    <!-- 10 -->
    <div class="early_con_10 wrap_bg" v-if="showState == 10">
      <div class="early_con_10_left">
        <div class="item_wrap_l item_wrap">
          <div
            class="item item_f fw4"
            :style="{transform: 'rotate('+item.deg+'deg)'}"
            v-for="(item,i) in early10List"
            :key="i"
          >{{item.f}}</div>
        </div>
        <div class="item_wrap_r item_wrap">
          <div
            class="item item_s fw4"
            :style="{transform: 'rotate('+item.deg+'deg)'}"
            v-for="(item,i) in early10List"
            :key="i"
          >{{item.s}}</div>
        </div>
      </div>
      <div class="early_con_10_right">
        <div class="suc_item">
          <div class="item_f">every</div>
          <div class="item_s">thing</div>
        </div>
      </div>
    </div>
    <img
      src="../assets/img/alphabet/shengyin-icon.png"
      alt
      class="sy_btn sy_btn10"
      v-if="showState == 10"
    >
    <!-- 20 -->
    <div class="early_con_20 wrap_bg" v-if="showState == 20">
      <div class="early_con_20_left">
        <img class="item" v-for="(item, i) in early20ListQ" :key="i">
      </div>
      <div class="early_con_20_right">
        <img src="../assets/img/fictionlist/box.png" alt class="top_img">
        <p class="mid_des f30 fw4 cfff">It’s a tool.</p>
        <p class="bottom_des f30 fw4 cfff">You can see through it.</p>
      </div>
    </div>
    <!-- 30 -->
    <div class="early_con_30 wrap_bg" v-if="showState == 30">
      <div>
        <div class="early_con_30_q f32">Why did dad give James a telescope?</div>
        <div class="early_con_30_a">
          <div class="item f28" v-for="(item, i) in eraly30ListA" :key="i">
            <span class="answer_idx f24">{{ item.idx }}</span>
            {{item.val}}
          </div>
        </div>
      </div>
    </div>

    <div class="early_next wrap_bg" v-if="showState == 40">
      <div class="early_next_top">
        <div
          class="early_next_top-item f28 fwb"
          v-for="(item, i) in early40ListQ"
          :key="i"
        >{{ i + 1 }}</div>
      </div>
      <div class="early_next_bottom">
        <div
          class="early_next_bottom-item f38  cfff"
          v-for="(item, i) in early40ListA"
          :key="i"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 40,
      maxState: 40,
      early10List: [
        { f: "every", s: "thing", deg: 10 + (Math.random() - 1) * 10 },
        { f: "birth", s: "day", deg: 10 + (Math.random() - 1) * 10 },
        { f: "thr", s: "ough", deg: 10 + (Math.random() - 1) * 10 },
        { f: "out", s: "side", deg: 10 + (Math.random() - 1) * 10 },
        { f: "tele", s: "scope", deg: 10 + (Math.random() - 1) * 10 }
      ],
      early20ListQ: ["a=1", "w=2", "e=3", "o=4"],
      eraly30ListA: [
        { idx: "A", val: "James like it." },
        { idx: "B", val: "It’s James birthday." },
        { idx: "C", val: "He wants to be a dinosaur hunter." },
        { idx: "D", val: "It made everything big." }
      ],
      early40ListQ: [1, 2, 3],
      early40ListA: ["look like","The fish","a whale"]
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
.fiction-test {
  height: 100%;
  width: 100%;
  background: url("../assets/img/fictionlist/bc.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .sy_btn {
    height: 1.1rem;
    width: 1.1rem;
    margin: 0 auto;
  }
  .sy_btn10 {
    margin-top: 0.21rem;
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
  .early_con_10 {
    width: 10.23rem;
    height: 3.81rem;
    margin: 0.86rem 0 0 1.32rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &_left {
      margin-left: 0.39rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 5.77rem;
      .item_wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .item_wrap_l {
        width: 3rem;
      }
      .item_wrap_r {
        width: 2.77rem;
      }
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.18rem;
      margin-right: 0.1rem;
    }
    .item_f {
      background: url("../assets/img/fictionlist/left.png") no-repeat;
      background-size: 100% 100%;
      height: 0.62rem;
      width: 1.39rem;
    }
    .item_s {
      background: url("../assets/img/fictionlist/right.png") no-repeat;
      background-size: 100% 100%;
      height: 0.62rem;
      width: 1.22rem;
    }
    &_right {
      width: 3.05rem;
      height: 3.2rem;
      border: 0.02rem solid rgba(0, 193, 183, 1);
      margin-right: 0.39rem;
      padding-top: 0.2rem;
      .suc_item {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-left: 0.16rem;
        .item_f {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item_s {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          left: -0.16rem;
        }
      }
    }
  }

  .early_con_20 {
    width: 10.42rem;
    height: 4.44rem;
    margin: 0.87rem auto 0;
    align-items: flex-start;
    flex-direction: row;
    &_left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 4.7rem;
      margin-left: 0.7rem;
      margin-top: 0.37rem;
      .item {
        width: 2.2rem;
        height: 1.56rem;
        background-color: #ddd;
        margin-bottom: 0.3rem;
      }
    }
    &_right {
      margin-left: 0.64rem;
      .top_img {
        width: 2.45rem;
        height: 2.11rem;
        margin-left: 0.35rem;
        margin-top: 0.3rem;
      }
      .mid_des,
      .bottom_des {
        height: 0.48rem;
        text-align: center;
        line-height: 0.48rem;
        border-radius: 0.1rem;
        background: rgba(0, 193, 183, 1);
      }
      .mid_des {
        width: 1.93rem;
        margin-top: 0.39rem;
        margin-left: 0.84rem;
      }
      .bottom_des {
        width: 3.6rem;
        margin-top: 0.14rem;
      }
    }
  }

  .early_con_30 {
    width: 9.48rem;
    height: 4.75rem;
    margin: 0.7rem auto 0;
    &_q {
      margin-top: 0.8rem;
      // margin-left: 1.75rem;
      line-height: 1;
    }
    &_a {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 0.39rem;
    }
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;
      line-height: 1;
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
  }

  .early_next {
    width: 9.48rem;
    height: 4.75rem;
    margin: 0.70rem auto 0;
    &_top {
      width: 7.92rem;
      height: .91rem;
      background: rgba(247, 247, 247, 1);
      border: 0.02rem dashed rgba(204, 204, 204, 1);
      border-radius: 0.06rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 1.27rem;
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
      width: 7.92rem;
      height: .76rem;
      margin: 0.46rem auto 0;
      padding: 0 0.42rem;
      &-item {
        height: .76rem;
        width: 2.05rem;
        border-radius: 0.06rem;
        background-color: #00C1B7;
        line-height: .76rem;
        text-align: center;
      }
    }
  }
}
</style>
