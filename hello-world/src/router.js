import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

// const Foo = () => import('./components/Foo.vue');
// const Bar = () => import('./components/Bar.vue');

// const Foo = () => import(/* webpackChunkName: "group-foo" */ './components/Foo.vue');
// const Bar = () => import(/* webpackChunkName: "group-foo" */ './components/Bar.vue');

export const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
