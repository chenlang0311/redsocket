import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      path: '/early2',
      name: 'early2',
      component: () => import(/* webpackChunkName: "about" */ './views/early2.vue')
    },
    {//14个目录
      path: '/Early3List',
      name: 'Early3List',
      component: () => import(/* webpackChunkName: "about" */ './views/Early3List.vue')
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
      component: () => import(/* webpackChunkName: "about" */ './views/Early4List.vue')
    },
  ]
});

