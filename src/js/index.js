import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'
import App from './App.vue'
import '../sass/custom.scss'

Vue.use(BootstrapVue)
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
  router,
  components: { App },
  template: '<App/>',
})
