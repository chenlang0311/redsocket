import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/alphabet',
      name: 'alphabet',
      component: () => import(/* webpackChunkName: "about" */ './views/alphabet.vue')
    },
    {//个人成就
      path: '/achievement',
      name: 'achievement',
      component: () => import(/* webpackChunkName: "about" */ './views/Achievement.vue')
    },
    {//14个目录
      path: '/fiction',
      name: 'fiction',
      component: () => import(/* webpackChunkName: "about" */ './views/fiction.vue')
    },
    {//14个目录
      path: '/fictionlist',
      name: 'fictionlist',
      component: () => import(/* webpackChunkName: "about" */ './views/FictionList.vue')
    },
     {//14个目录
      path: '/lettera',
      name: 'lettera',
      component: () => import(/* webpackChunkName: "about" */ './views/LetterA.vue')
    },
    {//14个目录
      path: '/early1',
      name: 'early1',
      component: () => import(/* webpackChunkName: "about" */ './views/early1.vue')
    },
    {//14个目录
      path: '/Early1List',
      name: 'Early1List',
      component: () => import(/* webpackChunkName: "about" */ './views/Early1List.vue'),
      meta:{
        title:"Early 1 Fiction a Quick Picnic"
      }
    },
    {//14个目录
      path: '/early2',
      name: 'early2',
      component: () => import(/* webpackChunkName: "about" */ './views/early2.vue')
    },
    {//14个目录
      path: '/Early2List',
      name: 'Early2List',
      component: () => import(/* webpackChunkName: "about" */ './views/Early2List.vue'),
      meta:{
        title:"Early 2 Fiction Hatching eggs"
      }
    },
    {//14个目录
      path: '/Early3List',
      name: 'Early3List',
      component: () => import(/* webpackChunkName: "about" */ './views/Early3List.vue'),
      meta:{
        title:"Early 3 Brave Grace"
      }
    },
    {//14个目录
      path: '/early3',
      name: 'early3',
      component: () => import(/* webpackChunkName: "about" */ './views/early3.vue')
    },
    {//14个目录
      path: '/early4',
      name: 'early4',
      component: () => import(/* webpackChunkName: "about" */ './views/early4.vue')
    },
    {//14个目录
      path: '/Early4List',
      name: 'Early4List',
      component: () => import(/* webpackChunkName: "about" */ './views/Early4List.vue'),
      meta:{
        title:"Early 4 Fiction  All by Myself"
      }
    },
    {//14个目录
      path: '/EmergentList',
      name: 'EmergentList',
      component: () => import(/* webpackChunkName: "about" */ './views/EmergentList.vue')
    },
    {//14个目录
      path: '/emergement',
      name: 'emergement',
      component: () => import(/* webpackChunkName: "about" */ './views/emergement.vue')
    },
    {//14个目录
      path: '/PreReadingList',
      name: 'PreReadingList',
      component: () => import(/* webpackChunkName: "about" */ './views/PreReadingList.vue')
    },
    {//14个目录
      path: '/PreReading',
      name: 'PreReading',
      component: () => import(/* webpackChunkName: "about" */ './views/PreReading.vue')
    },
    {//14个目录
      path: '/LetteraTest',
      name: 'LetteraTest',
      component: () => import(/* webpackChunkName: "about" */ './views/LetteraTest.vue')
    },
    {//14个目录
      path: '/TestResult',
      name: 'TestResult',
      component: () => import(/* webpackChunkName: "about" */ './views/TestResult.vue')
    },
  ]
});


router.beforeEach((to, from, next) => {
  if(to.meta.title) {
  document.title = to.meta.title;
}

/*if(to.path !== global.location.pathname) {
      location.assign(to.fullPath)
}*/   

next();
}); 
export default router