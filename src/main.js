import Vue from 'vue';

Vue.config.productionTip = false;

import './styles.css';

import App from './app/app.vue';
import router from './app/app-routing';
import store from './app/store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
