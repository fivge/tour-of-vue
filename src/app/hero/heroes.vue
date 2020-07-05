<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li
        v-for="hero of heroes"
        :key="hero.id"
        :class="{ selected: hero === selectedHero }"
        @click="onSelect(hero)"
      >
        <span class="badge">{{ hero.id }}</span>
        {{ hero.name }}
      </li>
    </ul>

    <app-hero-detail :hero="selectedHero"></app-hero-detail>
  </div>
</template>

<script>
import HeroDetail from './hero-detail.vue';

import { getHeroes } from './hero.service';

export default {
  name: 'Heroes',
  components: {
    'app-hero-detail': HeroDetail
  },
  data: function() {
    return {
      heroes: null,
      selectedHero: null
    };
  },
  created() {
    this.getHeroes();
  },
  methods: {
    getHeroes() {
      // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      // TODO: DI
      getHeroes().then(heroes => (this.heroes = heroes));
    },
    onSelect(hero) {
      this.selectedHero = hero;
      // this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
      this.$store.commit('add', `HeroesComponent: Selected hero id=${hero.id}`);
    }
  }
};
</script>

<style scoped>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 0.1em;
}
.heroes li.selected {
  background-color: #cfd8dc;
  color: white;
}
.heroes li.selected:hover {
  background-color: #bbd8dc;
  color: white;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}
</style>
