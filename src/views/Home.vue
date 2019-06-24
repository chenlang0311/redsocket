<template>
  <div class="home">
    <Record />
    <div @click="toAlphabet">toAlphabet</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Record from '@/components/Record.vue'
export default {
  name: 'home',
  components: {
    Record
  },
  methods:{
    toAlphabet(){
      this.$router.push({
        path:'/alphabet'
      })
    }
  }
}
</script>
