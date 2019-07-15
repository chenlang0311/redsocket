<template>
    <div class="catalog">
      <div class="wrap">
        <div
          class="wrap_item"
          :class="'wrap_item'+i"
          v-for="(item,i) in list"
          :key="i"
          @click="toTest(item)"
        >
          <p class="wrap_item_title">Test{{i+1}}</p>
          <p class="wrap_item_name" :class="'wrap_item_name'+i">{{item.name}}</p>
          <img :src="item.src" alt :class="'iconimg'+i">
        </div>
      </div>
      <img src="../assets/img/alphabet/bottom_bar.png" alt="" class="bottom_bar_img">
    </div>
</template>

<script>
export default {
 data() {
    return {
      list: [
        {
          id: 1,
          name: "I know it",
          src: require("../assets/img/alphabet/icon1.png")
        },
        {
          id: 2,
          name: "I Can Speak",
          src: require("../assets/img/alphabet/icon2.png")
        },
        {
          id: 3,
          name: "My Vocabulary",
          src: require("../assets/img/alphabet/icon3.png")
        }
      ]
    };
  },
  mounted() {
    console.log("AudioRecorder");
  },
  created() {
    this.getAudios();
  },
  methods: {
    getAudios() {
      console.log("getAudios");
    },
    toTest(item) {
      console.log(item.id);
    }
  }
}
</script>

<style lang="scss">
.catalog {
  background: url("../assets/img/alphabet/bc.png") no-repeat;
  background-size: 100% 100%;
  height: 7.5rem;
  width: 13.34rem;
  overflow: hidden;
  .wrap {
    display: flex;
    align-items: center;
    margin: 1.43rem 0 0 3.02rem;
    .wrap_item {
      height: 2.48rem;
      width: 2.12rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .wrap_item_title {
        font-size: 0.32rem;
        font-weight: bold;
        color: rgba(135, 114, 73, 1);
        line-height: 1;
        margin-top: 0.05rem;
      }
      .wrap_item_name {
        color: rgba(135, 114, 73, 1);
        font-size: 0.34rem;
        line-height: 0.34rem;
        margin-top: 0.45rem;
      }
      .wrap_item_name2 {
        margin-top: 0.26rem;
      }
      .iconimg0 {
        height: 0.85rem;
        width: 1rem;
        margin-top: 0.22rem;
      }
      .iconimg1 {
        height: 0.86rem;
        width: 0.74rem;
        margin-top: 0.19rem;
      }
      .iconimg2 {
        height: 0.52rem;
        width: 1.02rem;
        margin-top: 0.22rem;
      }
    }
    .wrap_item0 {
      background: url("../assets/img/alphabet/kuang1.png") no-repeat;
      background-size: 100% 100%;
    }
    .wrap_item1 {
      background: url("../assets/img/alphabet/kuang2.png") no-repeat;
      background-size: 100% 100%;
      margin: 0 0.3rem;
    }
    .wrap_item2 {
      background: url("../assets/img/alphabet/kuang3.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  .bottom_bar_img{
    height: .57rem;
    width: 8.13rem;
    margin-left: 2.61rem;
  }
}
</style>
