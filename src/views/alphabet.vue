<template>
    <div class="alphabet">
       <div class="wrap">
           <div class="wrap_item" :class="'wrap_item'+i" v-for="i in 3" :key="i">
               <p class="wrap_item_title">Test{{i}}</p>
               <p class="wrap_item_name"></p>
               <img :src="'../assets/img/alphabet/icon'+i+'.png'" alt="" :class="'iconimg'+i">
           </div>
       </div>
        <!-- <Record /> -->
    </div>
</template>

<script>
// import Record from '@/components/Record.vue'
export default {
data(){
    return {
        name:['I know it','I can']
    }
},
 components: {
    // Record
},
mounted(){
    console.log("AudioRecorder")
},
created(){
    this.getAudios();
},
methods:{
    getAudios(){
        console.log("getAudios")
    }
}
}

</script>

<style lang="scss">

.alphabet{
    background: url("../assets/img/alphabet/bc.png") no-repeat;
    background-size: contain;
    height: 7.50rem;
    width: 13.34rem;
    overflow: hidden;
    .wrap{
        display: flex;
        align-items: center;
        margin: 1.43rem 0 0 3.02rem;
        .wrap_item{
            height: 2.48rem;
            width: 2.12rem;
            text-align: center;
            .wrap_item_title{
                font-size:.32rem;
                font-weight:bold;
                color:rgba(135,114,73,1);
                line-height:1;
                margin-top: .05rem;
            }
            .iconimg1{
                height: .85rem;
                width: 1.00rem;
            }
        }
        .wrap_item1{
            background: url("../assets/img/alphabet/kuang1.png") no-repeat;
            background-size: contain;
            
        }
        .wrap_item2{
            background: url("../assets/img/alphabet/kuang2.png") no-repeat;
            background-size: contain;
            margin: 0 .30rem;
        }
        .wrap_item3{
            background: url("../assets/img/alphabet/kuang3.png") no-repeat;
            background-size: contain;
        }
    }
}
</style>
