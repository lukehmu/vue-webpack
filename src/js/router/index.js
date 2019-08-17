import Vue from 'vue'
import Router from 'vue-router'
import Graph from '../components/Graph.vue'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Graph,
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
})
