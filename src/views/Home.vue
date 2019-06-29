<template>
  <div class="home" id="deg90">
    <!-- <Record /> -->
    <div class="list">
      <div class="item" @click="to('achievement',{lv:3})">证书(LV3)</div>
      <div class="item" @click="to('achievement',{lv:2})">证书(LV2)</div>
      <div class="item" @click="to('achievement',{lv:1})">证书(LV1)</div>
      <div class="item" @click="to('Early1List')">Early1目录</div>
      <div class="item" @click="to('early1')">Early1-Step9</div>
      <div class="item" @click="to('Early2List')">Early2目录</div>
      <div class="item" @click="to('early2')">Early2-Step9</div>
      <div class="item" @click="to('Early3List')">Early3目录</div>
      <div class="item" @click="to('early3')">Early3-Step9</div>
      <div class="item" @click="to('Early4List')">Early4目录</div>
      <div class="item" @click="to('early4')">Early4-Step9</div>
      <div class="item" @click="to('lettera')">LetterA目录</div>
      <div class="item" @click="to('LetteraTest')">Lettera-Test</div>
      <div class="item" @click="to('FictionList')">Fiction目录</div>
      <div class="item" @click="to('fiction')">Fiction-Test</div>
      <div class="item" @click="to('EmergentList')">Emergent 目录 </div>
      <div class="item" @click="to('emergement')">Emergent-Test</div>
      <div class="item" @click="to('PreReadingList')">PreReading 目录 </div>
      <div class="item" @click="to('PreReading')">PreReading-Test</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Record from '@/components/Record.vue'
export default {
  name: 'home',
  components: {
    // Record
  },
    beforeRouteEnter(to, from, next) {
    next(vm => {
      //触发resize强制横屏
      vm.clCheckScrenn();
    });
  },
  methods:{
    to(path,query){
      this.$router.push({
        path:path,
        query:query
      })
    }
  }
}
</script>

<style lang="scss">
.list{
  display: flex;
  flex-wrap: wrap;
  .item{
    margin: 10px auto;
    width: 200px;
    border-radius: 16px;
    background: red;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>

