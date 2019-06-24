<template>
  <div class="alphabet" id="deg90">
    <!-- <Catalog /> -->
    <CatalogGuide />
    <!-- <PreTest /> -->
    <!-- <TestResult /> -->
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
  },
  
};
</script>

<style lang="scss">
.alphabet{
  height: 100%;
  width: 100%;
}
</style>
