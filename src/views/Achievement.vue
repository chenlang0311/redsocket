<template>
  <div class="myachieve" id="deg90">
    <div
      class="lv1"
      :style="{backgroundImage: 'url(' + (showState==10?lv1BG:lv1GbBack) + ')',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}"
    >
      <div class="lv1_con" v-if="showState == 10">
        <p class="con_title f40 fw4">
          恭喜
          <span class="tdu">&nbsp;王小明&nbsp;</span>:
        </p>
        <div class="con_detail f32 fw4">
          &emsp;&emsp;学完了
          <span class="f26 detail_des">&emsp;Alphabet2-4岁 letterA&emsp;</span>阶段的
          <span class="f26 detail_des">&emsp;1&emsp;</span> 本书
        </div>
      </div>
      <img
        src="../assets/img/achieve/next.png"
        class="next_img"
        v-if="showState == 10"
        @click="toNext"
      >
      <div class="lv1_next" v-if="showState == 20&&lv==1">
        <div class="lv1_next_left">
          <div class="lv1_left_top">
            <p class="f26 fwb lv1_left_top_des">
              Vocabolary（词汇）:
              <span class="lv1_left_top_bd">1</span>（个）:
            </p>
            <div class="lv1_left_top_con">
              <div class="lv1_left_top_con-item" v-for="(item,i) in lv1LeftTop" :key="i">
                <span class="c123">{{item.f}}</span>
                {{item.s}}
              </div>
            </div>
          </div>
          <div class="lv1_left_bottom">
            <p class="f26 fwb lv1_left_top_des">
              Vocabolary（词汇）:
              <span class="lv1_left_top_bd">1</span>（个）:
            </p>
            <div class="lv1_left_bottom_con">
              <div class="lv1_left_bottom_con-item" v-for="(item,i) in lv1LeftBottom" :key="i">
                <span class="c123">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="lv1_next_right">
          <p class="f26 fwb lv1_next_right_des">Mistaken Question Collection（错题集）：</p>
          <div class="lv1_next_right_con">
            <div class="lv1_next_right_con-item" v-for="(item,i) in lv1Right" :key="i">
              <span class="circle f28 fwb">{{item}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lv2_next" v-if="showState == 20&&lv==2">
        <div class="lv2_next_top">
          <div
            class="lv2_next_top_item f26 fwb"
            :class="'lv2_next_top_'+i"
            v-for="(item,i) in lv2NextTop"
            :key="i"
          >
            {{item}}
            <span class="lv1_left_top_bd lv2_left_top_bd">1</span>
          </div>
        </div>
        <div class="lv2_next_bottom">
          <div class="lv2_next_bottom_left">
            <div class="lv2_next_bottom_left_top">
              <p class="f26 fwb lv1_left_top_des">
                Vocabolary(词汇):
                <span class="lv1_left_top_bd">1</span>（个）:
              </p>
              <div class="lv2_next_bottom_left_top_con">
                <div class="item f28" v-for="(item,i) in lv2NextLeftTop" :key="i">{{item}}</div>
              </div>
            </div>
            <div class="lv2_next_bottom_left_bottom">
              <p class="f26 fwb lv1_left_top_des">
                Sight Words(视觉词):
                <span class="lv1_left_top_bd">1</span>（个）:
              </p>
              <div class="lv2_next_bottom_left_bottom_con">
                <div class="item f28" v-for="(item,i) in lv2NextLeftBottom" :key="i">{{item}}</div>
              </div>
            </div>
          </div>
          <div class="lv2_next_bottom_right">
            <div class="lv2_next_bottom_right_top">
              <p class="f26 fwb lv1_left_top_des">Key Sentence Patterns(关键句型):</p>
              <div class="lv2_next_bottom_left_bottom_con">
                i am
                <span class="lv1_left_top_bd">big</span>
              </div>
            </div>
            <div class="lv2_next_bottom_right_bottom">
              <p class="f26 fwb lv1_left_top_des">Mistaken Question Collection(错题集):</p>
              <div class="lv1_next_right_con">
                <div class="lv1_next_right_con-item" v-for="(item,i) in lv2Right" :key="i">
                  <span class="circle f28 fwb">{{item}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lv3_next" v-if="showState == 20&&lv==3">
        <div class="lv3_next_left">
          <div class="lv3_next_left_top">
              <p class="f26 fwb lv1_left_top_des">
              Gifts(奖品):
              <span class="lv1_left_top_bd">1</span>
            </p>
          </div>
          <div class="lv3_next_left_bottom">
              <p class="f26 fwb lv1_left_top_des">
              Vocabolary（词汇）:
              <span class="lv1_left_top_bd">1</span>（个）:
            </p>
            <div class="lv1_left_top_con">
              <div class="lv1_left_top_con-item" v-for="(item,i) in lv3LeftBottom" :key="i">
                <span class="c123">{{item.f}}</span>
                {{item.s}}<span class="c123" v-if="item.f2">{{item.f2}}</span><span v-if="item.s2">{{item.s2}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="lv3_next_right">
          <div class="lv3_next_right_top">
              <p class="f26 fwb lv1_left_top_des">
              Key Letters(核心字母):
              <span class="lv1_left_top_bd">1</span>（个）:
            </p>
           <div class="lv1_left_bottom_con">
              <div class="lv1_left_bottom_con-item" v-for="(item,i) in lv3RightTop" :key="i">
                <span class="c123">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="lv3_next_right_bottom">
              <p class="f26 fwb lv1_left_top_des">Mistaken Question Collection(错题集):</p>
              <div class="lv1_next_right_con">
                <div class="lv1_next_right_con-item" v-for="(item,i) in lv3RightBottom" :key="i">
                  <span class="circle f28 fwb">{{item}}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <img
        src="../assets/img/achieve/last.png"
        class="next_img last_img"
        v-if="showState == 20"
        @click="toLast"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showState: 10,
      lv: 1,
      lv1BG: require("../assets/img/achieve/lv1-bc.png"),
      lv1GbBack: require("../assets/img/achieve/lv1_back-bc.png"),
      lv1LeftTop: [
        {
          f: "p",
          s: "irate"
        },
        {
          f: "q",
          s: "ueen"
        },
        {
          f: "s",
          s: "ailor"
        },
        {
          f: "l",
          s: "ion"
        },
        {
          f: "f",
          s: "armer"
        },
        {
          f: "k",
          s: "ing"
        },
        {
          f: "j",
          s: "uggler"
        },
        {
          f: "d",
          s: "inosaur"
        }
      ],
      lv1LeftBottom: ["Dd", "Ff", "Jj", "Kk", "Ll", "Pp", "Qq", "Ss"],
      lv1Right: [1, 2, 3],
      lv2NextTop: ["Score(得分):", "Grade(等级):", "Gold Count(金币数):"],
      lv2NextLeftTop: [
        "kangaroo",
        "horse",
        "bear",
        "garilla",
        "crocodile",
        "whale",
        "elephant",
        "dinosaur"
      ],
      lv2NextLeftBottom: ["am", "the", "big", "said"],
      lv2Right: [1, 2],
      lv3LeftBottom:[
        {
          f: "a",
          s: "pple"
        },
        {
          f: "a",
          s: "nim",
        s2:"l",
          f2:"a"
        },
        {
          f: "a",
          s: "nts"
        },
         {
          f: "a",
          s: "nce"
        },
        {
          f: "a",
          s: "staon",
          f2:"a",
          s2:"ut"
        },
        {
          f: "a",
          s: "rrows"
        },
        {
          f: "a",
          s: "nchor"
        },
        {
          f: "a",
          s: "llg",
          f2:"a",
          s2:"tor"
        }
      ],
      lv3RightTop:["Aa"],
      lv3RightBottom:[1,2,3]
    };
  },
  beforeRouteEnter(to, from, next) {
  next(vm => {
    //触发resize强制横屏
    vm.clCheckScrenn();
  });
},
  created() {
    this.lv = this.$route.query.lv;
    if (this.lv >= 1) {
      this.lv1BG = require(`../assets/img/achieve/lv${this.lv}-bc.png`);
      this.lv1GbBack = require(`../assets/img/achieve/lv${
        this.lv
      }_back-bc.png`);
    }
    console.log(this.lv);
  },
  methods: {
    toNext() {
      this.showState += 10;
    },
    toLast() {
      this.showState -= 10;
    }
  }
};
</script>

<style lang="scss">
.myachieve {
  width: 100%;
  height: 100%;
  .lv1 {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .lv1_con {
      background: url("../assets/img/achieve/lv1_con-bg.png") no-repeat;
      background-size: 100% 100%;
      height: 3.96rem;
      width: 6.45rem;
      margin-top: 1.17rem;
      margin-left: 0.85rem;
      color: #000;
      text-align: left;
      overflow: hidden;
      padding-top: 1.1rem;
      padding-left: 0.36rem;
      .con_title,
      .con_detail {
        width: 5.57rem;
      }
      .detail_des {
        line-height: 0.46rem;
        border-bottom: 1px #57361d solid;
        display: inline-block;
      }
    }
    .next_img {
      height: 0.69rem;
      width: 0.66rem;
      position: absolute;
      top: 2.72rem;
      right: 0.22rem;
    }
    .last_img {
      left: 0.19rem;
    }

    .lv1_left_top_bd {
      border-bottom: 1px solid #333;
      width: 1.12rem;
      display: inline-block;
      text-align: center;
    }
    .lv2_left_top_bd {
      width: 1.02rem;
    }
    .circle {
      width: 0.38rem;
      height: 0.38rem;
      border: 0.02rem solid rgba(51, 51, 51, 1);
      border-radius: 50%;
      text-align: center;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lv1_next_right_con-item {
      margin-left: 0.21rem;
      margin-top: 0.3rem;
    }
    .lv1_left_top_con {
          width: 5.46rem;
          height: 1.75rem;
          background: rgba(229, 237, 200, 1);
          border-radius: 0.1rem;
          margin-top: 0.27rem;
          font-size: 0.3rem;
          color: #333;
          display: flex;
          flex-wrap: wrap;
          padding-left: 0.3rem;
          &-item {
            width: 25%;
            display: flex;
            align-items: center;
          }
        }
        .lv1_left_bottom_con {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 5.46rem;
          height: 0.65rem;
          background: rgba(229, 237, 200, 1);
          border-radius: 0.1rem;
          margin-top: 0.23rem;
        }
    .lv1_next {
      margin-top: 0.29rem;
      margin-left: 1.02rem;
      overflow: hidden;
      display: flex;
      .lv1_left_top {
        background: url("../assets/img/achieve/lv1_top.png") no-repeat;
        background-size: 100% 100%;
        height: 3.39rem;
        width: 6.2rem;
        padding-top: 0.44rem;
        padding-left: 0.35rem;
        text-align: left;
       
      }
      .lv1_left_bottom {
        background: url("../assets/img/achieve/lv1_bottom.png") no-repeat;
        background-size: 100% 100%;
        height: 2.07rem;
        width: 6.2rem;
        margin-top: 0.22rem;
        padding-top: 0.44rem;
        padding-left: 0.35rem;
        text-align: left;
        
      }
      .lv1_next_right {
        background: url("../assets/img/achieve/lv1_right.png") no-repeat;
        background-size: 100% 100%;
        height: 5.72rem;
        width: 5.71rem;
        margin-left: 0.27rem;
        padding-left: 0.35rem;
        text-align: left;
        padding-top: 2.74rem;
        &_des {
          line-height: 1;
        }
        &_con {
          width: 5.03rem;
          height: 2.25rem;
          background: rgba(229, 237, 200, 1);
          border-radius: 0.1rem;
          margin-top: 0.19rem;
          text-align: left;
          overflow: hidden;
        }
      }
    }
    .lv2_next {
      margin-top: 0.24rem;
      margin-left: 1rem;
      margin-right: 0.2rem;
      overflow: hidden;
      &_top {
        display: flex;
        justify-content: space-between;
        height: 1rem;
        &_item {
          display: flex;
          align-items: center;
        }
        &_0,
        &_1 {
          background: url("../assets/img/achieve/lv2_left_bottom.png") no-repeat;
          background-size: 100% 100%;
          height: 1rem;
          width: 3.7rem;
          padding-right: 0.45rem;
        }
        &_0 {
          padding-left: 0.35rem;
        }
        &_1 {
          padding-left: 0.26rem;
        }
        &_2 {
          background: url("../assets/img/achieve/lv2_top_right.png") no-repeat;
          background-size: 100% 100%;
          height: 1rem;
          width: 4.4rem;
          padding-right: 0.45rem;
          padding-left: 0.32rem;
        }
      }
      &_bottom {
        margin-top: 0.14rem;
        display: flex;
        .lv1_left_top_des {
          line-height: 1;
        }
        &_left_top {
          background: url("../assets/img/achieve/lv2_left_mid.png") no-repeat;
          background-size: 100% 100%;
          height: 2.64rem;
          width: 6.2rem;
          padding-top: 0.43rem;
          padding-left: 0.24rem;
          text-align: left;
          &_con {
            width: 5.7rem;
            height: 1.26rem;
            background: rgba(250, 200, 214, 1);
            border-radius: 0.1rem;
            margin-top: 0.21rem;
            display: flex;
            flex-wrap: wrap;
            padding-left: 0.25rem;
            .item {
              display: flex;
              width: 25%;
              align-items: center;
            }
          }
        }
        &_left_bottom {
          background: url("../assets/img/achieve/lv2_left_bottom.png") no-repeat;
          background-size: 100% 100%;
          height: 1.78rem;
          width: 6.2rem;
          text-align: left;
          margin-top: 0.19rem;
          padding-top: 0.45rem;
          padding-left: 0.23rem;
          &_con {
            display: flex;
            align-items: center;
            width: 5.7rem;
            height: 0.68rem;
            background: rgba(250, 200, 214, 1);
            border-radius: 0.1rem;
            margin-top: 0.1rem;
            padding-left: 0.17rem;
            .item {
              margin-right: 0.35rem;
            }
          }
        }
        &_right {
          margin-left: 0.19rem;
        }
        &_right_top {
          background: url("../assets/img/achieve/lv2_left_bottom.png") no-repeat;
          background-size: 100% 100%;
          height: 1.75rem;
          width: 5.72rem;
          text-align: left;
          padding-top: 0.45rem;
          padding-left: 0.21rem;
          .lv2_next_bottom_left_bottom_con {
            width: 5.26rem;
          }
          .lv1_left_top_bd {
            width: 0.47rem;
          }
        }
        &_right_bottom {
          background: url("../assets/img/achieve/lv2_right_bottom.png")
            no-repeat;
          background-size: 100% 100%;
          height: 2.68rem;
          width: 5.72rem;
          text-align: left;
          padding-top: 0.4rem;
          padding-left: 0.34rem;
          margin-top: 0.2rem;
          .lv1_next_right_con {
            width: 5.04rem;
            height: 1.6rem;
            background: rgba(250, 200, 214, 1);
            border-radius: 0.1rem;
            margin-top: 0.2rem;
            overflow: hidden;
          }
        }
      }
    }
    .lv3_next {
      margin-top: 0.57rem;
      margin-left: 1.05rem;
      display: flex;
      &_left {
        &_top {
          background: url("../assets/img/achieve/lv3_left_top.png") no-repeat;
          background-size: 100% 100%;
          height: 1.01rem;
          width: 6.06rem;
          text-align: left;
          display: flex;
          align-items: center;
          padding-left: .33rem;
          .lv1_left_top_bd{
              width: 3.01rem;
          }
        }
        &_bottom {
          background: url("../assets/img/achieve/lv3_left_bottom.png") no-repeat;
          background-size: 100% 100%;
          height: 4.28rem;
          width: 6.08rem;
          text-align: left;
          padding-top: 0.44rem;
          padding-left: 0.24rem;
          margin-top: 0.13rem;
          .lv1_left_top_con{
                background:rgba(222,192,252,1);
                width: 5.56rem;
                height: 2.72rem;
                border-radius: .10rem;
                .lv1_left_top_con-item{
                    width: auto;
                    margin-right: .40rem;
                }
          }
        }
      }
      &_right {
        margin-left: 0.14rem;
        &_top {
          background: url("../assets/img/achieve/lv3_right_top.png") no-repeat;
          background-size: 100% 100%;
          height: 1.8rem;
          width: 5.85rem;
          text-align: left;
          padding-top: .46rem;
          padding-left: .23rem;
          .lv1_left_top_des{
              line-height: 1;
          }
          .lv1_left_bottom_con{
              background:rgba(222,192,252,1);
                width: 5.34rem;
                height: .68rem;
                justify-content: inherit;
                padding-left: .17rem;
          }
        }
        &_bottom {
          background: url("../assets/img/achieve/lv3_rigth_bottom.png")
            no-repeat;
          background-size: 100% 100%;
          height: 3.48rem;
          width: 5.85rem;
          text-align: left;
          padding-top: 0.41rem;
          padding-left: 0.36rem;
          margin-top: 0.13rem;
          .lv1_next_right_con{
               background:rgba(222,192,252,1);
                width: 5.12rem;
                height: 2.29rem;
                border-radius: .10rem;
                overflow: hidden;
                margin-top: .19rem;

          }
        }
      }
    }
  }
}
</style>
