<template>
  <div>
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
export default {
  name: 'Heroes',
  data: function() {
    return {
      hero: {
        id: 1,
        name: 'Windstorm'
      }
    };
  },
  computed: {
    heroName: function() {
      return `${this.hero.name}`.toUpperCase();
    }
  }
};
</script>

<style scoped></style>
