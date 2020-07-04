import Vue from 'vue';

Vue.config.productionTip = false;

import App from './app/app.vue';
// import router from './app/router';
// import store from './app/store';

new Vue({
  el: '#app',
  // router,
  // store,
  render: h => h(App)
});
