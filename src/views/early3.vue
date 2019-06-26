<template>
    <div class="early2" id="deg90">
       <Early3Test />
    </div>
</template>
    
<script>
import Early3Test from '@/components/Early3Test.vue'
export default {
data(){
    return{

    }
},
 components: {
    Early3Test
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
.early2{

}
</style>
