<template>
  <div class="alphabet">
    <!-- <Catalog /> -->
    <!-- <CatalogGuide /> -->
    <PreTest />
    <!-- <Record /> -->
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import CatalogGuide from '../components/CatalogGuide.vue'
import PreTest from '../components/PreTest.vue'
export default {
  data() {
    return {
      
    };
  },
  components: {
    Catalog,
    CatalogGuide,
    PreTest
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

</style>
