<template>
    <div class="emergement" id="deg90">
       <EmergementTest />
    </div>
</template>
    
<script>
import EmergementTest from '@/components/EmergementTest.vue'
export default {
data(){
    return{

    }
},
 components: {
    EmergementTest
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
.emergement{

}
</style>
