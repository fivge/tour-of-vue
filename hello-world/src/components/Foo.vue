<template>
  <div>
    <span>Foo</span>
    <button @click="goBar()">to home</button>
  </div>
</template>

<script>
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
    },
    goBar() {
      this.$router.push('/');
    }
  }
};
</script>
