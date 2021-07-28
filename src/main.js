import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cart: []
    }
  },
  render: h => h(App),
  router
}).$mount('#app')
