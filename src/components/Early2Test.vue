<template>
  <div class="early2-test">
    <div class="sort_num">
      <img src="../assets/img/early2/biaoqian.png" class="bg_img" />
      <p class="sort_num_des">1/3</p>
    </div>
    <img
      src="../assets/img/alphabet/left.png"
      alt=""
      class="jiantou_next jiantou_last"
      @click="last"
    />
    <img
      src="../assets/img/alphabet/jiantou-icon.png"
      alt=""
      class="jiantou_next"
      @click="next"
    />
    <div class="early_con" v-if="showState==10">
        <div class="early_con_top">

        </div>
        <div class="early_con_mid">
            <div class="index f24">1</div>
            <div>Look! Some baby spiders are coming out.</div>
            <img src="../assets/img/early2/bofang.png" alt="" class="bofang_img">
        </div>
        <div class="early_con_bottom">
            <img src="../assets/img/early2/true.png" alt="" class="pb_img pb_img_left">
            <img src="../assets/img/early2/false.png" alt="" class="pb_img">
        </div>
    </div>
    <div class="btn_group fw4 cfff" v-if="showState==10">
      <div class="btn_group_item btn_group_item_left">
          重复次数：
          <span class="c122">0/5</span>
      </div>
      <div class="btn_group_item">播放语速:<span class="c122">正常</span>
      </div>
    </div>

    <div class="early_next" v-if="showState==20">
        <div class="early_next_top">
            <div class="early_next_top-item f28 fwb" v-for="(item,i) in earlyList" :key="i">{{i+1}}</div>
        </div>
        <div class="early_next_bottom">
            <div class="early_next_bottom-item f38 fwb cfff" v-for="(item,i) in earlyList" :key="i">{{item}}</div>
        </div>
    </div>
    <div class="early_30" v-if="showState==30">

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showState: 30,
          maxState:30,
            earlyList:["Out.","are coming","Some baby spiders","Look!"]
        }
    },
    methods:{
        last() {
        if(this.showState-10>0){
            this.showState = this.showState -10;
        }
      
    },
    next() {
        if(this.showState<this.maxState){
        this.showState += 10;
        }
      
    }
    }
};
</script>

<style lang="scss">
.early2-test {
  height: 100%;
  width: 100%;
  background: url("../assets/img/fictionlist/list/bc.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
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
  .early_con {
    width: 9.6rem;
    height: 4.38rem;
    background: rgba(247, 247, 247, 1);
    border: 0.14rem solid rgba(255, 255, 255, 1);
    box-shadow: 0 0.05rem 0 0 rgba(215, 248, 251, 0.65);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0.47rem auto 0;
    &_top{
        width: 2.22rem;
        height: 1.49rem;
        border-radius: 0.14rem;
        background-color: #ddd;
        margin-top: .41rem;
    }
    &_mid{
        display: flex;
        align-items: center;
        margin-top: .40rem;
        .index{
            width:.32rem;
            height:.32rem;
            border:.02rem solid rgba(51,51,51,1);
            border-radius:50%;
            line-height: .32rem;
            text-align: center;
            margin-right: .12rem;;
        }
        .bofang_img{
            height: .43rem;
            width: .52rem;
            margin-left: .37rem;
        }
    }
    &_bottom{
        display: flex;
        margin-top: .30rem;
        .pb_img{
            height: .91rem;
            width: .91rem;
            &_left{
                margin-right: .71rem;
            }
        }
        
        
    }
  }
  .btn_group{
      margin-top: .28rem;
      display: flex;
      align-items: center;
      justify-content: center;
        &_item{
            background: url("../assets/img/early2/button.png") no-repeat;
            background-size: 100% 100%;
            height: .59rem;
            width: 2.10rem;
            text-align: center;
            line-height: .59rem;
            &_left{
                margin-right: .30rem;
            }
        }
        
  }
  .early_next{
      width: 8.51rem;
    height: 3.60rem;
    background: rgba(247, 247, 247, 1);
    border: 0.14rem solid rgba(255, 255, 255, 1);
    box-shadow: 0 0.05rem 0 0 rgba(215, 248, 251, 0.65);
    border-radius: 0.49rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1.21rem auto 0;
    &_top{
        width:7.92rem;
        height:.91rem;
        background:rgba(247,247,247,1);
        border:.02rem dashed rgba(204,204,204,1);
        border-radius:.06rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: .62rem;
        &-item{
            height: .38rem;
            width: .38rem;
            border:.02rem solid rgba(51,51,51,1);
            border-radius:50%;
            line-height: .38rem;
        }
    }
    &_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 7.94rem;
        margin: .46rem auto 0;
        &-item{
            height: .76rem;
            border-radius: .06rem;
            background-color: rgba(0,193,183,1);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 .20rem;
        }
    }
  }
}
</style>
