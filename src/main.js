import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import heatmap from 'vue-heatmapjs'
// import h337 from 'heatmapjs'
// Vue.use(h337)
Vue.use(heatmap)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
