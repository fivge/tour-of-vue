import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import DashboardComponent from './hero/dashboard.vue';
import HeroDetail from './hero/hero-detail.vue';
import Heroes from './hero/heroes.vue';

// const Foo = () => import('./components/Foo.vue');
// const Bar = () => import('./components/Bar.vue');

// const Foo = () => import(/* webpackChunkName: "group-foo" */ './components/Foo.vue');
// const Bar = () => import(/* webpackChunkName: "group-foo" */ './components/Bar.vue');

const routes = [
  { path: '', redirect: 'dashboard' },
  { path: '/dashboard', component: DashboardComponent },
  { path: '/detail/:id', component: HeroDetail },
  { path: '/heroes', component: Heroes }
];

// const routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent }
// ];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
