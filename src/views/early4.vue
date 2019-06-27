<template>
    <div class="early4" id="deg90">
       <Early4Test />
    </div>
</template>
    
<script>
import Early4Test from '@/components/Early4Test.vue'
export default {
data(){
    return{

    }
},
 components: {
    Early4Test
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
.early4{

}
</style>
