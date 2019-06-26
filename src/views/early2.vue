<template>
    <div class="early2" id="deg90">
       <Early2Test />
    </div>
</template>
    
<script>
import Early2Test from '@/components/Early2Test.vue'
export default {
data(){
    return{

    }
},
 components: {
    Early2Test
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
