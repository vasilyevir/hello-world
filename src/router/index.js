import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import character from '../components/character/index.vue'
import episode from '../components/episode/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: index
    },
    {
        path: '/character/:id',
        name: 'character',
        component: character
    },
    {
        path: '/episode/:id',
        name: 'episode',
        component: episode
    }
  ]
})