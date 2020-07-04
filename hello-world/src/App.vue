<template>
  <div id="app">
    <HelloWorld :msg="message" />

    <router-link to="/foo">Go to Foo </router-link><br />
    <router-link to="/bar">Go to Bar </router-link><br />
    <router-link to="/baz">Go to Baz </router-link><br />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      message: 'Welcome to Vue.js App'
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
