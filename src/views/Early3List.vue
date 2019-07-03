<template>
  <div class="early3list" id="deg90">
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
      <img src="../assets/img/fictionlist/list/hengtiao.png" alt="" class="top_ht" />
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
          <p class="name f24" :class="'name' + (i + 6)">{{ item.name }}</p>
          <img
            :src="item.src"
            alt=""
            class="item_img"
            :class="'item_img' + (i + 6)"
          />
        </div>
      </div>
      <img src="../assets/img/fictionlist/list/hengtiao.png" alt="" class="top_ht" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { 
        bottomList: [
        {
          id: 7,
          top: false,
          name: "I can  Choose",
          src: require("../assets/img/fictionlist/list/7.png"),
          bc: require("../assets/img/fictionlist/7.png"),
          height: "1.72",
          width: "1.37",
          mr: ".35"
        },
        {
          id: 8,
          top: false,
          name: "True  or  False",
          src: require("../assets/img/fictionlist/list/8.png"),
          bc: require("../assets/img/fictionlist/8.png"),
          height: "1.74",
          width: "1.38",
          mr: ".35"
        },
        {
          id: 9,
          top: false,
          name: "I Know  the Answer",
          src: require("../assets/img/early3/09.png"),
          bc: require("../assets/img/fictionlist/9.png"),
          height: "1.74",
          width: "1.38",
          mr: ".35"
        },
        {
          id: 10,
          top: false,
          name: "Put it in Order",
          src: require("../assets/img/early3/10.png"),
          bc: require("../assets/img/fictionlist/10.png"),
          height: "1.74",
          width: "1.38",
          mr: ".35"
        },
        {
          id: 11,
          top: false,
          name: "Little Quiz",
          src: require("../assets/img/early3/11.png"),
          bc: require("../assets/img/fictionlist/11.png"),
          height: "1.74",
          width: "1.38",
          mr: ".35"
        },
        {
          id: 12,
          top: false,
          name: "My  Achievement",
          src: require("../assets/img/early3/12.png"),
          bc: require("../assets/img/fictionlist/12.png"),
          height: "1.74",
          width: "1.38",
          mr: "0"
        }
      ],
      topList: [
        {
          id: 1,
          top: true,
          name: "Vocabulary",
          src: require("../assets/img/fictionlist/list/1.png"),
          bc: require("../assets/img/lettera/1.png"),
          height: "1.76",
          width: "1.55",
          mr: ".33"
        },
        {
          id: 2,
          top: true,
          name: "Listen  and  Repeat",
          src: require("../assets/img/fictionlist/list/2.png"),
          bc: require("../assets/img/fictionlist/2.png"),
          height: "1.78",
          width: "1.54",
          mr: ".32"
        },
        {
          id: 3,
          top: true,
          name: "Story  Time",
          src: require("../assets/img/fictionlist/list/3.png"),
          bc: require("../assets/img/fictionlist/3.png"),
          height: "1.73",
          width: "1.43",
          mr: ".29"
        },
        {
          id: 4,
          top: true,
          name: "Sight  Words",
          src: require("../assets/img/fictionlist/list/4.png"),
          bc: require("../assets/img/fictionlist/4.png"),
          height: "1.75",
          width: "1.43",
          mr: ".30"
        },{
          id: 5,
          top: false,
          name: "Word  Search",
          src: require("../assets/img/fictionlist/list/5.png"),
          bc: require("../assets/img/fictionlist/5.png"),
          height: "1.75",
          width: "1.43",
          mr: ".32"
        },
        {
          id: 6,
          top: false,
          name: "I can Tell  the Story",
          src: require("../assets/img/fictionlist/list/6.png"),
          bc: require("../assets/img/fictionlist/6.png"),
          height: "1.72",
          width: "1.37",
          mr: "0"
        },
      ]};
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
        path:"/early3"
      })
    }
  }
};
</script>

<style lang="scss">
.early3list{
    height: 100%;
    width: 100%;
    .fictlist{
        background: url("../assets/img/early3/bc.png") no-repeat;
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
        overflow: hidden;
        .top_ht {
      height: 0.55rem;
      width: 11.20rem;
      margin-top: -0.12rem;
      margin-left: 1.20rem;
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
          
          &1{
              margin-top: .10rem;
          }
          &2 {
            margin-top: 0.1rem;
          }
          &5{
              width: 80%;
          }
      
           &0,&8,&11{
              width: 100%;
          }
        }
        .item_img {
          height: 0.53rem;
          width: 0.61rem;
          margin: 0.12rem auto 0;
          &0{
              height: .37rem;
              width: .73rem; 
              margin-top: .26rem;
          }
          &1 {
              height: .45rem;
            width: .49rem;
            margin-top: .06rem;
          }
          &2 {
            height: 0.45rem;
            width: 0.39rem;
            margin-top: 0.18rem;
          }
          &3 {
            height: .51rem;
              width: .51rem;
              margin-top: .12rem;
          }
          &4{
              height: .53rem;
              width: .53rem;
              margin-top: .10rem;
          }
          &5{
              height: .51rem;
              width: .48rem;
              margin-top: .10rem;
          }
          &6{
              height: .41rem;
              width: .51rem;
              margin-top: .18rem;
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
        &7{
              height: .32rem;
              width: .63rem;
              margin-top: .13rem;
          }
          &8{
              height: .48rem;
              width: .48rem;
              margin-top: .18rem;
          }
          &9{
              height: .34rem;
              width: .39rem;
              margin-top: .10rem;
          }
          &10{
              height: .50rem;
              width: .50rem;
              margin-top: .10rem;
          }
          &11{
              height: .44rem;
              width: .49rem;
              margin-top: .23rem;
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
