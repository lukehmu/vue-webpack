import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
import { Card, ListGroup, Button } from 'bootstrap-vue/es/components'
import router from './router'
import store from './store'
import App from './App.vue'
import '../sass/custom.scss'


Vue.use(Card)
Vue.use(ListGroup)
Vue.use(Button)
// Vue.use(BootstrapVue)
// const DetailPage = { template: '<div>detail</div>' }
// const routes = [
//   { path: '/detail', component: DetailPage },
// ]
// const router = new VueRouter({
//   routes, // short for `routes: routes`
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: 'history',
  router,
  store,
  components: { App },
  template: '<App/>',
})
