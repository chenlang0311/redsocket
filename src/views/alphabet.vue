<template>
  <div class="alphabet">
    <!-- <Catalog /> -->
    <!-- <CatalogGuide /> -->
    <!-- <PreTest /> -->
    <TestResult />
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
  mounted() {
    console.log("AudioRecorder");
  },
  created() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
.alphabet{
  height: 100%;
  width: 100%;
}
</style>
