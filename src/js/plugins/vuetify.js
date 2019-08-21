import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css' // eslint-disable-line import/no-extraneous-dependencies
// Ensure you are using css-loader
Vue.use(Vuetify)

export default new Vuetify({
  theme: { dark: true },
})
