<template>
    <div class="early1" id="deg90">
       <Early1Test />
    </div>
</template>
    
<script>
import Early1Test from '@/components/Early1Test.vue'
export default {
data(){
    return{

    }
},
 components: {
    Early1Test
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
.early1{

}
</style>
