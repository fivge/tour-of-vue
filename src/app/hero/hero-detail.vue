<template>
  <div v-if="hero">
    <!-- <h2>{{hero.name | uppercase}} Details</h2> TODO: 管道-->
    <h2>{{ heroName }} Details</h2>
    <div>
      <span>id:</span>
      {{ hero.id }}
    </div>
    <div>
      <label>
        name:
        <input v-model="hero.name" placeholder="name" />
      </label>
    </div>
  </div>
</template>

<script>
import { HEROES } from './mock-heroes';

export default {
  name: 'HeroDetail',
  props: {
    hero: null
  },
  computed: {
    heroName: function() {
      return `${this.hero.name}`.toUpperCase();
    }
  }
};
</script>

<style scoped>
</style>
