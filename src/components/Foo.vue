<template>
  <div>
    <span>Foo</span>
    <button @click="goBar()">to home</button>
  </div>
</template>

<script>
import { fetcFooList } from '../foo.api';

export default {
  name: 'Foo',
  created: function() {
    this.init();
  },
  computed: {
    username() {
      return this.$route.params.username;
    }
  },
  methods: {
    init() {
      console.log('init', this.$router, this.$route);
      fetcFooList().then(res => console.log('get data', res));
    },
    goBar() {
      this.$router.push('/');
    }
  }
};
</script>
