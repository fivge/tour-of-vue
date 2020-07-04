import Vue from 'vue';

Vue.config.productionTip = false;

import App from './App.vue';
import router from './router';
import store from './store';

new Vue({ el: '#app', router, store, render: h => h(App) });
