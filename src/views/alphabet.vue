<template>
  <div class="alphabet" id="deg90">
    <div class="list">
      <div class="item" @click="chengeState(10)">目录</div>
      <div class="item" @click="chengeState(20)">测评开始</div>
      <div class="item" @click="chengeState(30)">测试页面</div>
      <div class="item" @click="chengeState(40)">结果页面</div>
      <div class="item"></div>
    </div>
    <Catalog v-if="showState==10" />
    <CatalogGuide v-if="showState==20" />
    <PreTest v-if="showState==30" />
    <TestResult v-if="showState==40" />
    <!-- <Record /> -->
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import CatalogGuide from '../components/CatalogGuide.vue'
import PreTest from '../components/PreTest.vue'
import TestResult from '../components/TestResult.vue'
export default {
  
  data() {
    return {
      showState:10
    };
  },
  components: {
    Catalog,
    CatalogGuide,
    PreTest,
    TestResult
  },
    beforeRouteEnter(to, from, next) {
    next(vm => {
      //触发resize强制横屏
      recalc();
      // vm.reffer = from.fullPath;
    });
  },
  created() {
    
  },
  mounted() {
    console.log("AudioRecorder");
  },
  methods: {
    chengeState(state){
      this.showState = state
    }
  },
  
};
</script>

<style lang="scss">
.alphabet{
  height: 100%;
  width: 100%;
  .list{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9999;
    .item{
      width: 200px;
    }
  }
}
</style>
