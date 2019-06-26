import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
  ]
});

