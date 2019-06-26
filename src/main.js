import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import "./assets/js/flexxble2"
import Vconsole from 'vconsole'

const vConsole = new Vconsole();
Vue.prototype.clCheckScrenn=function(){
  var doc = window.document;
  var docEl = doc.documentElement;
  var clientWidth = docEl.getBoundingClientRect().width;
      var height = document.documentElement.clientHeight;
      if(clientWidth<height){
        recalc();
      }
};
export default vConsole;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');