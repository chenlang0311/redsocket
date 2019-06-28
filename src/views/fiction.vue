<template>
    <div class="fiction" id="deg90">
       <FictionTest />
    </div>
</template>
    
<script>
import FictionTest from '@/components/FictionTest.vue'
export default {
data(){
    return{

    }
},
 components: {
    FictionTest
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //触发resize强制横屏
      recalc();
    });
  },
methods:{},
created(){}
}
</script>

<style lang="scss">
.fiction{

}
</style>
