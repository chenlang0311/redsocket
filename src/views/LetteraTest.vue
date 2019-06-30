<template>
  <div class="lettera_wrap" id="deg90">
    <div class="lettea_before" v-if="showBefore">
      <div class="ban_wrap fw4">Aa</div>
      <div class="bt_bg">
        <img src="../assets/img/lettera-test/bottom.png" alt class="bottom_img">
      </div>
      <div class="before_wrap">
        <div
          class="before_wrap_left before_wrap_item f30 cfff fw4"
          :class="'before_wrap_left_'+(i+1)"
          v-for="(item,i) in beforeListLeft"
          :key="i"
        ></div>
        <div class="before_wrap_right">
          <div
            class="before_wrap_item f30 cfff fw4"
            :style="{top:Math.random()*2.7+1.28+'rem',right:Math.random()*4.7+'rem'}"
            v-for="(item,i) in beforeListRight"
            :key="i"
          >{{item}}</div>
        </div>
      </div>
      <img src="../assets/img/alphabet/shengyin-icon.png" alt class="sy_icon">
    </div>

    <div class="lettera-test" v-else>
      <div class="sort_num" v-if="showState==10||showState==20||showState==30||showState==40">
        <img src="../assets/img/alphabet/biaoqian.png" class="bg_img">
        <p class="sort_num_des">1/5</p>
      </div>
      <div class="wrap2" v-if="showState === 10">
        <div class="wrap2_item">
          <i class="capital">N</i>
          <i>n</i>
        </div>
      </div>
      <div class="lettea_test_20" v-if="showState === 20">
        <div class="lettea_test_20_left">
          <div class="left_top">Aa</div>
          <img src="../assets/img/alphabet/shengyin-icon.png" class="sy_icon">
        </div>
        <div class="lettea_test_20_right">
          <div class="right_top">
            <img src="../assets/img/lettera-test/pingguo.png" alt class="right_top_img">
          </div>
          <div class="right_bottom f48">
            <span class="c123">a</span>pple
          </div>
        </div>
      </div>
      <div class="early_con_10" v-if="showState == 30">
        <div class="early_con_10_top">
          <div class="q_img_wrap">
            <img src="../assets/img/lettera-test/pingguo.png" alt class="q_img">
          </div>
          <div class="answer_wrap">
            <div class="answer_des f48 fw4">apple</div>
            <div class="answer_line"></div>
            <div class="answer_q f48">苹果</div>
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
      <div class="early_con_30 wrap_bg" v-if="showState == false">
        <div class="early_con_30_top f40 fw4">“I am big” said the kangaroo.</div>
        <div class="early_con_30_bottom">
          <div class="item" v-for="(item,i) in eraly30List" :key="i">
            <div class="answer_idx f24">{{item.idx}}</div>
            <img :src="item.src" alt class="answer_img">
          </div>
        </div>
      </div>
      <img src="../assets/img/alphabet/shengyin-icon.png" class="sy_icon" v-if="showState == 10">
      <div class="early_con_20" v-if="showState == 60">
        <div class="early_con_20_left wrap_bg">
          <div class="con_q"></div>
          <div class="game_wrap">
            <div
              class="game_item f36 fw4"
              :class="i<3?'game_item_active':(i<5?'game_item_click':'')"
              v-for="(item,i) in eraly20ListA"
              :key="i"
            >{{item}}</div>
          </div>
          <div class="con_a"></div>
        </div>
      </div>
      <div class="game_result" v-if="showState == 60&&hasResult">
        <div class="error_diago fwb" v-if="false">不对哦，宝宝!</div>
        <div class="right_result" style="padding-left:3.27rem">真棒！</div>
        <!-- <img src="../assets/img/lettera-test/right_diago.png" alt class="right_result"> -->
        <img src="../assets/img/lettera-test/close.png" alt class="close_result_img">
      </div>
      <div class="lettea_test_40 wrap_bg" v-if="showState == 40||showState == 50">
        <img
          src="../assets/img/lettera-test/a_has.png"
          alt
          class="lettea_test_40_img"
          v-if="showState == 50"
        >
        <img
          src="../assets/img/lettera-test/a_null.png"
          alt
          class="lettea_test_40_img"
          v-if="showState == 40"
        >
      </div>
      <div class="lettea_test_70" v-if="showState==70">
        <div class="lettea_test_70_con wrap_bg">
          <div class="con_des f40 fwb">
            Big A ,little a,bouncing bee,
            The cat’s in the cupboard
            And he can’t see me.
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
      <div class="lettea_test_80" v-if="showState==80">
        <div class="lettea_test_80_q">
          <img
            :src="item.src"
            alt
            v-for="(item,i) in Test80Qa"
            :key="i"
            class="q_q_img"
            :class="'q_q_img'+(i+1)"
          >
        </div>
        <div class="lettea_test_80_a">
          <img src="../assets/img/lettera-test/a_big.png" alt class="q_a_img">
        </div>
      </div>
      <div class="game_result" v-if="showState==80&&showResult==80">
           <div class="error_diago fwb" >拼图失败！</div>
           <div class="right_result" v-if="false">拼图成功！</div>
        <img src="../assets/img/lettera-test/close.png" alt class="close_result_img">
      </div>
      <div class="early_con_40" v-if="showState == false">
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
      <div class="early_con_50" v-if="showState == false"></div>
      <div class="btn_group" v-if="showState == false">
        <div class="btn_group_item cfff fwb">
          <img src="../assets/img/emergent/luyin.png" alt class="ly_img">
          Record
        </div>
        <div class="btn_group_item cfff fwb sy_btn">
          <img src="../assets/img/emergent/shengyin.png" alt class="sy_img">
          Listen
        </div>
      </div>
      <div class="early_con_60" v-if="showState == false">
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
      <div class="early_con_60" v-if="showState == false">
        <div class="card_wrap">
          <img
            :src="item.src"
            alt
            class="card_img card_item"
            v-for="(item,i) in eraly70ListQ"
            :key="i"
          >
          <div class="card_item f30 fw4" v-for="(item,i) in eraly70ListQ" :key="i+0.1">{{item.name}}</div>
        </div>
      </div>
      <div class="early_con_80" v-if="showState == false">
        <div class="con_diago">
          <p class="diago_des f32 fw5">已生成完整音频！</p>
          <div class="btn_g">
            <div class="btn_i cfff f32">一键分享</div>
            <div class="btn_i cfff f32">下载</div>
          </div>
        </div>
        <img src="../assets/img/emergent/xx.png" alt class="xx_img">
      </div>
      <img src="../assets/img/emergent/dianchi.png" alt class="dc_img" v-if="showState == false">
    </div>
    <img src="../assets/img/alphabet/left.png" alt class="jiantou_next jiantou_last" @click="last">
    <img src="../assets/img/alphabet/jiantou-icon.png" alt class="jiantou_next" @click="next">
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBefore: false,
      hasResult: true,
      showState: 80,
      maxState: 80,
      showResult:80,
      beforeListLeft: [1, 2],
      beforeListRight: ["A", "a", "c", "D", "A", "a"],
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
      eraly70ListQ: [
        { name: "kangaroo", src: "" },
        { name: "gorilla", src: "" },
        { name: "baer", src: "" },
        { name: "horse", src: "" }
      ],
      Test80Qa: [
        { src: require("../assets/img/lettera-test/1.png") },
        { src: require("../assets/img/lettera-test/2.png") },
        { src: require("../assets/img/lettera-test/3.png") },
        { src: require("../assets/img/lettera-test/4.png") }
      ]
    };
  },
    beforeRouteEnter(to, from, next) {
  next(vm => {
    //触发resize强制横屏
    vm.clCheckScrenn();
  });
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
.lettera_wrap {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .lettea_before {
    height: 100%;
    width: 100%;
    background: url("../assets/img/lettera-test/before_bc.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .sy_icon {
      height: 1.1rem;
      width: 1.1rem;
      position: absolute;
      right: 1.24rem;
      bottom: 0.25rem;
    }
    .ban_wrap {
      background: url("../assets/img/lettera-test/ban.png") no-repeat;
      background-size: 100% 100%;
      height: 3.53rem;
      width: 2.77rem;
      margin-left: 4.73rem;
      font-size: 1.58rem;
      line-height: 1;
      padding-top: 1.2rem;
    }
    .bt_bg {
      position: absolute;
      bottom: 0;
      margin-left: 5.47rem;
      width: 2.32rem;

      .bottom_img {
        height: 1.5rem;
        width: 2.09rem;
        position: absolute;
        bottom: 0.28rem;
      }
    }
    .before_wrap {
      display: flex;
      &_left {
        position: absolute;
        top: 0;
        left: 0;
        &_1 {
          top: 1.59rem;
          left: 0.15rem;
          height: 0.52rem;
          width: 0.55rem;
        }
        &_2 {
          height: 0.6rem;
          width: 0.63rem;
          top: 1.47rem;
          left: 2.72rem;
        }
      }
      &_right {
        position: absolute;
        top: 0;
        right: 0;
      }
      &_item {
        background: url("../assets/img/lettera-test/pingguo.png") no-repeat;
        background-size: 100% 100%;
        height: 0.57rem;
        width: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
      }
    }
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
  .lettera-test {
    height: 100%;
    width: 100%;
    background: url("../assets/img/lettera-test/bc.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .game_result {
      background: rgba(0, 0, 0, 0.6);
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      .error_diago {
        background: url("../assets/img/lettera-test/error_diago.png") no-repeat;
        background-size: 100% 100%;
        height: 3rem;
        width: 7.77rem;
        font-size: 0.54rem;
        line-height: 3rem;
        padding-left: 3.27rem;
        margin-top: 1.37rem;
        margin-left: 2.44rem;
        text-align: left;
      }
      .right_result {
        height: 3.37rem;
        width: 6.15rem;
        margin-top: 1.1rem;
        margin-left: 3.26rem;
        background: url("../assets/img/lettera-test/result.png") no-repeat;
        background-size: 100% 100%;
        font-size: 0.54rem;
        line-height: 3.37rem;
        padding-left: 2.8rem;
        text-align: left;
        color: #fff;
      }
      .close_result_img {
        height: 0.58rem;
        width: 0.58rem;
        margin: 0.07rem auto;
      }
    }
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
      height: 1.17rem;
      width: 1.47rem;
      position: absolute;
      top: -0.17rem;
      right: 0.53rem;
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
    .wrap2 {
      height: 3.73rem;
      width: 6.43rem;
      margin: 0.92rem auto 0;
      position: relative;
      background: url("../assets/img/alphabet/ban2.png") no-repeat;
      background-size: 100% 100%;
      .wrap2_item {
        font-size: 1.72rem;
        font-family: TimesNewRomanPSMT;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 1;
        margin-top: 0.12rem;
        .capital {
          font-size: 2.39rem;
        }
      }
    }
    .lettea_test_20 {
      margin-top: 0.55rem;
      margin-left: 1.12rem;
      display: flex;
      overflow: hidden;
      &_left {
        .left_top {
          background: url("../assets/img/lettera-test/ban3.png") no-repeat;
          background-size: 100% 100%;
          height: 4.06rem;
          width: 4.85rem;
          line-height: 1;
          font-size: 2.55rem;
          font-weight: 400;
          color: #fff;
          padding-top: 0.35rem;
        }
      }
      &_right {
        margin-left: 0.63rem;
        margin-top: 0.2rem;
        .right_top {
          background: url("../assets/img/lettera-test/ban4.png") no-repeat;
          background-size: 100% 100%;
          height: 3.87rem;
          width: 4.85rem;
          overflow: hidden;
          &_img {
            height: 2.72rem;
            width: 2.87rem;
            margin-top: 0.5rem;
            margin-left: 0.99rem;
          }
        }
        .right_bottom {
          height: 1.09rem;
          width: 4.85rem;
          background: url("../assets/img/lettera-test/ban5.png") no-repeat;
          background-size: 100% 100%;
          margin-top: 0.14rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .lettea_test_40 {
      margin: 0.67rem auto 0;
      height: 5rem;
      width: 8.55rem;
      &_img {
        height: 3.36rem;
        width: 5.05rem;
        margin-top: 0.6rem;
        // margin-left: 1.57rem;
      }
    }
    .lettea_test_70 {
      margin-top: 0.6rem;

      &_con {
        margin-left: 1.66rem;
        height: 3.2rem;
        width: 9.83rem;
        .con_des {
          width: 5.5rem;
          color: #684328;
          text-align: left;
          margin-top: 0.6rem;
        }
      }
      .sy_btn {
        height: 1.1rem;
        width: 1.1rem;
        margin: 0.24rem auto;
      }
    }
    .lettea_test_80 {
      margin: 0.86rem auto 0;
      background: url("../assets/img/lettera-test/ban2.png") no-repeat;
      background-size: 100% 100%;
      height: 4.87rem;
      width: 9.45rem;
      display: flex;
      align-items: center;
      &_a {
        height: 3.15rem;
        width: 3.15rem;
        margin-left: 0.77rem;
        .q_a_img {
          height: 100%;
          width: 100%;
        }
      }
      &_q {
        width: 4.05rem;
        height: 4.05rem;
        margin-left: 0.57rem;
        position: relative;
        .q_q_img {
          height: 1.51rem;
          width: 2.01rem;
          position: absolute;
          &1 {
            top: 0;
            left: 0.5rem;
          }
          &2 {
            top: 0.5rem;
            right: 0;
          }
          &3 {
            bottom: 0.5rem;
            left: 0;
          }
          &4 {
            bottom: 0;
            right: 0.5rem;
          }
          &1,
          &4 {
            height: 2.01rem;
            width: 1.51rem;
          }
        }
      }
    }
    .early_con_10 {
      overflow: hidden;
      &_top {
        display: flex;
        margin-top: 0.45rem;
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
            height: 2.32rem;
            width: 2.45rem;
            margin: 0.39rem auto 0;
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
      &_btngroup {
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
      }
      .sy_btn {
        height: 1.1rem;
        width: 1.1rem;
        margin: 0.27rem auto 0;
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
        width: 8.71rem;
        height: 5.37rem;
        margin-right: 0.3rem;
        flex-direction: row;
        align-items: flex-start;
        .con_q {
          margin: 0.29rem 0.35rem 0 0.21rem;
          height: 1.38rem;
          width: 1.38rem;
          background: url("../assets/img/lettera-test/kl_bg.png");
          background-size: 100% 100%;
        }
        .con_a {
          height: 1.38rem;
          width: 1.38rem;
          background: url("../assets/img/lettera-test/pg_bg.png");
          background-size: 100% 100%;
          margin-left: 0.35rem;
          margin-top: 3.36rem;
        }
        .game_wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 4.56rem;
          margin-top: 0.35rem;
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
          .game_item_click {
            background: rgba(247, 197, 25, 1);
            color: #684328;
            border: none;
          }
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
    .early_con_80 {
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      flex-direction: column;
      .con_diago {
        height: 4.1rem;
        width: 4.44rem;
        background: url("../assets/img/emergent/tanchuang.png") no-repeat;
        background-size: 100% 100%;
        margin-top: 0.76rem;
        .diago_des {
          margin-top: 2.38rem;
          line-height: 1;
        }
        .btn_g {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.37rem;
          margin-left: 0.3rem;
          .btn_i {
            background: url("../assets/img/emergent/button5.png") no-repeat;
            background-size: 100% 100%;
            height: 0.73rem;
            width: 1.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.22rem;
          }
        }
      }
      .xx_img {
        height: 0.58rem;
        width: 0.58rem;
        margin: 0.21rem auto 0;
      }
    }
  }
}
</style>
