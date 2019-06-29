<template>
    <div class="prereading-test" id="deg90">
       <PreReadingTest />
    </div>
</template>
    
<script>
import PreReadingTest from '@/components/PreReadingTest.vue'
export default {
data(){
    return{

    }
},
 components: {
    PreReadingTest
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
.prereading-test{

}
</style>
