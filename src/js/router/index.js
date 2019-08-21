import Vue from 'vue'
import Router from 'vue-router'
import CardList from '../components/CardList.vue'
import Detail from '../components/Detail.vue'

Vue.use(Router)

function castRouteProps(route) {
  return {
    slug: String(route.params.slug),
    craftToken: String(route.query.token),
    craftPreview: String(route.query['x-craft-preview']),
  }
}


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardList,
      props: true,
    },
    {
      path: '/detail/:slug',
      name: 'beer-detail',
      component: Detail,
      // props: true,
      props: castRouteProps,
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: { template: '<div class="container">404 - Nothing here</div>' },
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
