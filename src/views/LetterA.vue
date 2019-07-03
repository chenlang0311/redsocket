<template>
  <div class="letter-a" id="deg90">
    <div class="a-list">
      <div class="list_top">
        <div
          class="list_top-item"
          :class="'list_top-item' + i"
          :style="{
            backgroundImage: 'url(' + item.bc + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: item.height + 'rem',
            width: item.width + 'rem',
            marginRight: item.mr + 'rem'
          }"
          v-for="(item, i) in topList"
          :key="i"
          @click="toTest()"
        >
          <p class="title f22 fwb">Step{{ item.id }}</p>
          <p class="name f24" :class="'name' + i">{{ item.name }}</p>
          <img
            :src="item.src"
            alt=""
            class="item_img"
            :class="'item_img' + i"
          />
          <img
            src="../assets/img/lettera/biaoqian.png"
            alt=""
            v-if="item.id == 1"
            class="biaoqian1_img"
          />
          <img
            src="../assets/img/lettera/biaoqian2.png"
            alt=""
            v-if="item.id == 2 || item.id == 3"
            class="biaoqian2_img"
          />
        </div>
      </div>
      <img src="../assets/img/lettera/hengtiao.png" alt="" class="top_ht" />
      <div class="list_top list_bottom">
        <div
          class="list_top-item"
          :class="'list_top-item' + i"
          :style="{
            backgroundImage: 'url(' + item.bc + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: item.height + 'rem',
            width: item.width + 'rem',
            marginRight: item.mr + 'rem'
          }"
          v-for="(item, i) in bottomList"
          :key="i"
          @click="toTest()"
        >
          <p class="title f22 fwb">Step{{ item.id }}</p>
          <p class="name f24" :class="'name' + (i + 4)">{{ item.name }}</p>
          <img
            :src="item.src"
            alt=""
            class="item_img"
            :class="'item_img' + (i + 4)"
          />
        </div>
      </div>
      <img src="../assets/img/lettera/hengtiao.png" alt="" class="top_ht" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomList: [
        {
          id: 5,
          top: false,
          name: "I can  Trace",
          src: require("../assets/img/lettera/05.png"),
          bc: require("../assets/img/fictionlist/5.png"),
          height: "1.75",
          width: "1.43",
          mr: ".32"
        },
        {
          id: 6,
          top: false,
          name: "Letter  Maze",
          src: require("../assets/img/lettera/06.png"),
          bc: require("../assets/img/fictionlist/6.png"),
          height: "1.72",
          width: "1.37",
          mr: ".37"
        },
        {
          id: 7,
          top: false,
          name: "I can  Rhyme",
          src: require("../assets/img/lettera/07.png"),
          bc: require("../assets/img/fictionlist/7.png"),
          height: "1.72",
          width: "1.37",
          mr: ".33"
        },
        {
          id: 8,
          top: false,
          name: "My  Achievement",
          src: require("../assets/img/lettera/08.png"),
          bc: require("../assets/img/fictionlist/8.png"),
          height: "1.74",
          width: "1.38",
          mr: "0"
        }
      ],
      topList: [
        {
          id: 1,
          top: true,
          name: " Alphabet  Puzzle",
          src: require("../assets/img/lettera/01.png"),
          bc: require("../assets/img/lettera/1.png"),
          height: "1.76",
          width: "1.55",
          mr: ".18"
        },
        {
          id: 2,
          top: true,
          name: "Alphabet  Hunt",
          src: require("../assets/img/fictionlist/05.png"),
          bc: require("../assets/img/fictionlist/2.png"),
          height: "1.78",
          width: "1.54",
          mr: ".24"
        },
        {
          id: 3,
          top: true,
          name: "Click  and  Listen",
          src: require("../assets/img/lettera/03.png"),
          bc: require("../assets/img/fictionlist/3.png"),
          height: "1.73",
          width: "1.43",
          mr: ".29"
        },
        {
          id: 4,
          top: true,
          name: "I can  Repeat",
          src: require("../assets/img/lettera/2.png"),
          bc: require("../assets/img/fictionlist/4.png"),
          height: "1.75",
          width: "1.43",
          mr: "0"
        }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
  next(vm => {
    //触发resize强制横屏
    vm.clCheckScrenn();
  });
},
  created() {},
  methods:{
    toTest(){
      this.$router.push({
        path:"/LetteraTest"
      })
    }
  }
};
</script>

<style lang="scss">
.letter-a {
  height: 100%;
  width: 100%;
  .a-list {
    background: url("../assets/img/lettera/BC.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .top_ht {
      height: 0.55rem;
      width: 7.69rem;
      margin: -0.12rem auto 0;
    }
    .list_top {
      display: flex;
      justify-content: center;
      margin-top: 0.77rem;
      &-item {
        margin-right: 0.18rem;
        position: relative;
        .title {
          color: #877249;
          width: 50%;
          margin: 0 auto;
          line-height: 1;
        }
        .name {
          width: 50%;
          margin: 0 auto;
          line-height: 0.24rem;
          margin-top: 0.18rem;
          color: #877249;
          font-weight: normal;
          &2 {
            margin-top: 0.1rem;
          }
        }
        .item_img {
          height: 0.53rem;
          width: 0.61rem;
          margin: 0.12rem auto 0;
          &1 {
            width: 0.53rem;
          }
          &2 {
            height: 0.45rem;
            width: 0.49rem;
            margin-top: 0.07rem;
          }
          &3 {
            height: 0.63rem;
            width: 0.53rem;
            margin-top: 0.09rem;
          }
        }
      }
    }
    .list_bottom {
      margin-top: 0.26rem;
      .name {
        &4 {
        }
        &7 {
          width: 100%;
        }
      }
      .item_img {
        &4 {
          height: 0.48rem;
          width: 0.45rem;
        }
        &5 {
          height: 0.5rem;
          width: 0.5rem;
        }
        &6 {
          height: 0.47rem;
          width: 0.48rem;
        }
        &7 {
          height: 0.44rem;
          width: 0.49rem;
        }
      }
    }
    .biaoqian1_img {
      position: absolute;
      bottom: -0.01rem;
      right: -0.07rem;
      height: 0.69rem;
      width: 0.57rem;
    }
    .biaoqian2_img {
      position: absolute;
      bottom: 0.12rem;
      right: -0.18rem;
      height: 0.55rem;
      width: 0.64rem;
    }
  }
}
</style>
