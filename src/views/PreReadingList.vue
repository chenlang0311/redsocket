<template>
  <div class="prereadinglist" id="deg90">
    <div class="fictlist">
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
          <img :src="item.src" alt class="item_img" :class="'item_img' + i">
          <img
            src="../assets/img/lettera/biaoqian.png"
            alt
            v-if="item.id == 1"
            class="biaoqian1_img"
          >
          <img
            src="../assets/img/lettera/biaoqian2.png"
            alt
            v-if="item.id == 2 || item.id == 3"
            class="biaoqian2_img"
          >
        </div>
      </div>
      <img src="../assets/img/lettera/hengtiao.png" alt class="top_ht">
      <div class="list_top list_bottom">
        <div
          class="list_top-item"
          :class="'list_top-item' + i+4"
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
          <img :src="item.src" alt class="item_img" :class="'item_img' + (i + 4)">
        </div>
      </div>
      <img src="../assets/img/lettera/hengtiao.png" alt class="top_ht">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topList: [
        {
          id: 1,
          top: true,
          name: "Vocabulary",
          src: require("../assets/img/fictionlist/list/1.png"),
          bc: require("../assets/img/lettera/1.png"),
          height: "1.76",
          width: "1.55",
          mr: ".31"
        },
        {
          id: 2,
          top: true,
          name: "Listen  and  Repeat",
          src: require("../assets/img/fictionlist/list/2.png"),
          bc: require("../assets/img/fictionlist/2.png"),
          height: "1.78",
          width: "1.54",
          mr: ".31"
        },
        {
          id: 3,
          top: true,
          name: "Story  Time",
          src: require("../assets/img/fictionlist/list/3.png"),
          bc: require("../assets/img/fictionlist/3.png"),
          height: "1.73",
          width: "1.43",
          mr: ".31"
        },
        {
          id: 4,
          top: true,
          name: "I can  Choose",
          src: require("../assets/img/fictionlist/list/7.png"),
          bc: require("../assets/img/fictionlist/4.png"),
          height: "1.75",
          width: "1.43",
          mr: "0"
        }
      ],
      bottomList: [
        {
          id: 5,
          top: false,
          name: "Key Letters  Matching",
          src: require("../assets/img/lettera/05.png"),
          bc: require("../assets/img/fictionlist/5.png"),
          height: "1.75",
          width: "1.43",
          mr: ".32"
        },

        {
          id: 6,
          top: false,
          name: "I can  Solve it",
          src: require("../assets/img/emergent/07.png"),
          bc: require("../assets/img/fictionlist/6.png"),
          height: "1.72",
          width: "1.37",
          mr: ".32"
        },
        {
          id: 7,
          top: false,
          name: "Card Game",
          src: require("../assets/img/fictionlist/list/10.png"),
          bc: require("../assets/img/fictionlist/7.png"),
          height: "1.74",
          width: "1.38",
          mr: "0.32"
        },
        {
          id: 8,
          top: false,
          name: "My  Achievement",
          src: require("../assets/img/early4/014.png"),
          bc: require("../assets/img/fictionlist/8.png"),
          height: "1.74",
          width: "1.38",
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
   methods:{
    toTest(){
      this.$router.push({
        path:"/PreReading"
      })
    }
  }
};
</script>

<style lang="scss">
.prereadinglist {
  height: 100%;
  width: 100%;
  .fictlist {
    background: url("../assets/img/pre-reading/bc.png") no-repeat;
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
      margin-top: 0.73rem;
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
          &1 {
            margin-top: 0.17rem;
          }
          &2 {
            margin-top: 0.1rem;
          }
          &5 {
            width: 80%;
          }
          &6 {
            width: 60%;
          }
          &0,
          &1,
          &4,
          &7 {
            width: 100%;
          }
        }
        .item_img {
          height: 0.53rem;
          width: 0.61rem;
          margin: 0.12rem auto 0;
          &0 {
            height: 0.37rem;
            width: 0.73rem;
            margin-top: 0.26rem;
          }
          &1 {
            height: 0.45rem;
            width: 0.49rem;
            margin-top: 0.10rem;
          }
          &2 {
            height: 0.45rem;
            width: 0.39rem;
            margin-top: 0.18rem;
          }
          &3 {
            height: 0.41rem;
            width: 0.51rem;
            margin-top: 0.12rem;
          }
          &4 {
            height: 0.53rem;
            width: 0.53rem;
            margin-top: 0.1rem;
          }
          &5 {
            height: 0.51rem;
            width: 0.48rem;
            margin-top: 0.1rem;
          }
          &6 {
            height: 0.5rem;
            width: 0.5rem;
            margin-top: 0.13rem;
            margin-left: 0.46rem;
          }
        }
      }
    }
    .list_bottom {
      margin-top: 0.29rem;
      .name {
      }
      .item_img {
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
