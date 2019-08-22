import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import App from './App.vue'
// import '../sass/custom.scss'

Vue.filter('stringToDate', (value) => {
  if (!value) return ''
  const valueInt = parseInt(value, 0)
  const entryDate = new Date(valueInt * 1000).toLocaleDateString()
  return `${entryDate}`
})
Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>',
})
