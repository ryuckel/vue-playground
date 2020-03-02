import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import Vueheatmap from './heatmap.js';
import { Subject } from 'rxjs';

const stream = new Subject();
export const pauser = new Subject();

Vue.config.productionTip = false;
Vue.use(Vueheatmap, {
  stream,
  pauser,
  heatmapPreload: [{ x: 10, y: 10, value: 10 }],
});

// stream
//   .throttleTime(1000)
//   .subscribe();

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
