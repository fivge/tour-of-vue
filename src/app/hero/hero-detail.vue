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
    <button @click="goBack">go back</button>
    <button @click="save">save</button>
  </div>
</template>

<script>
import { heroService } from './hero.service';

export default {
  name: 'HeroDetail',
  data: function() {
    return {
      hero: null
    };
  },
  computed: {
    heroName: function() {
      return `${this.hero.name}`.toUpperCase();
    }
  },
  created: function() {
    this.getHero();
  },
  methods: {
    getHero: function() {
      const id = +this.$route.params.id;
      heroService.getHero(id).then(hero => (this.hero = hero));
    },
    goBack: function() {
      this.$router.go(-1);
    },
    save() {
      heroService.updateHero(this.hero).then(() => this.goBack());
    }
  }
};
</script>

<style scoped>
/* HeroDetailComponent's private CSS styles */
label {
  display: inline-block;
  width: 3em;
  margin: 0.5em 0;
  color: #607d8b;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: 0.4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
