import Vue from 'vue'
import Router from 'vue-router'
import Graph from '../components/Graph.vue'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Graph,
      props: true,
    },
    {
      path: '/detail/:slug',
      name: 'beer-detail',
      component: Detail,
      props: true,
    },
    {
      path: '*',
      name: '404',
      component: { template: '<div class="container">404 - Nothing here</div>' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
