import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import VueLazyLoad from 'vue-lazyload';
import './assets/scss/app.scss';

Vue.use(Buefy);
Vue.use(VueLazyLoad);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
