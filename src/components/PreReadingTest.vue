<template>
  <div class="prereading-test">
    <div class="sort_num">
      <img src="../assets/img/early2/biaoqian.png" class="bg_img">
      <p class="sort_num_des">1/5</p>
    </div>
    <img src="../assets/img/alphabet/left.png" alt class="jiantou_next jiantou_last" @click="last">
    <img src="../assets/img/alphabet/jiantou-icon.png" alt class="jiantou_next" @click="next">
    <div class="early_con_10" v-if="showState == 10">
      <div class="early_con_10_top">
        <div class="q_img_wrap">
          <img src alt="snail图片" class="q_img">
        </div>
        <div class="answer_wrap">
          <div class="answer_des f48 fw4">snail</div>
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
          播放次数:
          <span class="c122">0/5</span>
        </div>
      </div>
      <img src="../assets/img/alphabet/shengyin-icon.png" alt class="sy_btn">
    </div>
    <div class="early_con_10" v-if="showState == 20">
      <div class="early_con_10_top">
        <div class="q_img_wrap">
          <img src alt class="q_img">
        </div>

        <div class="answer_wrap">
          <div class="answer_des f48 fw4">snail</div>
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
        <!-- <div class="sd_btn al_btn">
          播放速度:
          <span class="c122">正常</span>
        </div>-->
      </div>
      <img src="../assets/img/alphabet/luyin.png" alt class="sy_btn">
    </div>

    <div class="early_con_30" v-if="showState == 30">
      <div class="early_con_30_story"></div>
      <div class="early_con_10_btngroup">
        <div class="cf_btn al_btn">
          重复次数:
          <span class="c122">0/5</span>
        </div>
        <div class="sd_btn al_btn">
          播放速度:
          <span class="c122">正常</span>
        </div>
        <div class="zd_btn al_btn">自动</div>
        <img src="../assets/img/pre-reading/bofang.png" alt class="bf_img">
        <!-- <img src="../assets/img/pre-reading/zanting.png" alt class="bf_img"> -->
      </div>
    </div>
    <!-- <img src="../assets/img/alphabet/shengyin-icon.png" alt class="sy_btn" v-if="showState == 30"> -->
    <div class="early_con_40" v-if="showState == 40">
      <div class="early_con_40_left wrap_bg"></div>
      <div class="early_con_40_right wrap_bg">
        <div class="early_con_40_right_q f36 fw4">
          S is for
          <span class="lv1_left_top_bd">bird</span>
        </div>
        <div class="early_con_40_right_a">
          <div class="item" v-for="(item,i) in early40List" :key="i">
            <span class="answer_idx f24 fw4">{{item.idx}}</span>
            {{item.val}}
            <img src="../assets/img/pre-reading/dui.png" class="result_img">
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/img/alphabet/shengyin-icon.png"
      alt
      class="sy_btn sy_btn40"
      v-if="showState == 40"
    >
    <div class="early_con_50"  v-if="showState == 50">
        <div class="early_con_50_item" v-for="(item,i) in early50List" :key="i" :style="{top:(Math.random()*4+1)+'rem',left:(Math.random()*8+1)+'rem'}">{{item}}</div>
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
        <div
          :src="item.src"
          alt
          class="card_img card_item card_item_des"
          v-for="(item,i) in eraly70ListQ"
          :key="i"
        >
        <div class="item_top">{{item.q}}</div>
        <div class="item_mid"> <span class="lv1_left_top_bd"></span>{{item.d}}</div>
        </div>
        <div class="card_item f78 fw4" v-for="(item,i) in eraly70ListQ"   :key="i+0.1">
            {{item.a}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 60,
      maxState: 70,
      earlyList: [],
      early40List: [
        { idx: "1", val: "bird" },
        { idx: "2", val: "duck" },
        { idx: "3", val: "snail" }
      ],
      early50List:["Aa","A","a","c","b","d","f","e","A","a","c","b","d","f","e"],
      eraly60ListA: [1, 2, 3, 4, 5, 6],
      eraly70ListQ:[{q:"D is for ",d:"uck.",a:"b"},{q:"B is for ",d:"ird.",a:"m"},{q:"M is for ",d:"ouse.",a:"d"}]
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
.prereading-test {
  height: 100%;
  width: 100%;
  background: url("../assets/img/pre-reading/bc.png") no-repeat;
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
    overflow: hidden;
    &_top {
      display: flex;
      margin-top: 0.43rem;
      .q_img_wrap {
        height: 3.36rem;
        width: 4.85rem;
        background: rgba(247, 247, 247, 1);
        border: 0.14rem solid rgba(255, 255, 255, 1);
        box-shadow: 0px 0.05rem 0px 0px rgba(215, 248, 251, 0.65);
        border-radius: 0.49rem;
        margin-left: 1.42rem;
        margin-right: 0.63rem;
        .q_img {
          height: 100%;
          width: 100%;
          border-radius: 0.49rem;
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
        background-size: contain;
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

    .sy_btn {
      height: 1.1rem;
      width: 1.1rem;
      margin: 0.27rem auto 0;
    }
  }
  .early_con_10_btngroup {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.19rem;
    .al_btn {
      display: flex;
      align-items: center;
      height: 0.55rem;
      background: rgba(126, 106, 176, 1);
      box-shadow: 0px 0.04rem 0px 0px rgba(115, 94, 168, 1);
      border-radius: 0.1rem;
      min-width: 1.6rem;
      justify-content: center;
      color: #fff;
      font-weight: 400;
      margin-right: 0.2rem;
      font-size: 0.28rem;
      padding: 0 0.19rem;
      .right_img {
        height: 0.22rem;
        width: 0.28rem;
        margin-left: 0.17rem;
      }
    }
    .bf_img {
      height: 0.67rem;
      width: 0.64rem;
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
  .early_con_30 {
    width: 100%;
    height: 100%;
    background-color: #fff;
    &_story {
      height: 5.4rem;
      width: 10.28rem;
      background-color: #ddd;
      margin: 0 auto;
    }
  }
  .early_con {
    width: 11.09rem;
    height: 3.17rem;
    margin: 1.33rem auto 0;
    flex-direction: row;
    padding-left: 0.54rem;
    .item {
      height: 1.52rem;
      width: 2.07rem;
      margin-right: 0.5rem;
      border-radius: 0.12rem;
      background: #ddd;
    }
  }
  .sy_btn {
    height: 1.1rem;
    width: 1.1rem;
    margin: 0.37rem auto 0;
  }
  .sy_btn40 {
    margin-top: 0.55rem;
  }
  .early_con_40 {
    margin-top: 0.88rem;
    margin-left: 1.25rem;
    display: flex;
    &_left {
      height: 3.53rem;
      width: 5.21rem;
    }
    &_right {
      height: 3.53rem;
      width: 4.59rem;
      margin-left: 0.42rem;
      padding-left: 0.44rem;
      padding-top: 0.36rem;
      align-items: flex-start;
      &_a {
        margin-top: 0.33rem;
      }
      .lv1_left_top_bd {
        width: 1.4rem;
      }
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 0.24rem;
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
      .result_img {
        height: 0.22rem;
        width: 0.28rem;
        margin-left: 0.2rem;
      }
    }
  }
  .early_con_50{
      display: flex;
      position: relative;
      &_item{
          background: url("../assets/img/pre-reading/match_bg.png") no-repeat;
          background-size: 100% 100%;
          height: 1.00rem;
          width: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
      }
  }
   .early_con_60 {
    margin-top: 0.67rem;
    .card_wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 3.50rem;
      margin-right: 3.50rem;
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
      .card_item_des{
          flex-direction: column;
      }
    }
  }
}
</style>
