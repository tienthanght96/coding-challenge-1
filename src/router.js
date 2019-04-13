import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AlbumDetail from './views/AlbumDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/album-detail/:album_id',
      name: 'album-detail',
      component: () => import('./views/AlbumDetail.vue')
    },
  ]
})
