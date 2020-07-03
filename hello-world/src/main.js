import Vue from 'vue';

Vue.config.productionTip = false;

import App from './App.vue';
import router from './router';

new Vue({ el: '#app', router, render: h => h(App) });
