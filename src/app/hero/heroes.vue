<template>
  <div>
    <h2>My Heroes</h2>
    <div>
      <label>
        Hero name:
        <!-- TODO: 模板语法 -->
        <!-- <input #heroName /> -->
        <input v-model="heroName" />
      </label>
      <!-- (click) passes input value to add() and then clears the input -->
      <!-- TODO: 模板语法 -->
      <button @click="add(heroName);heroName=''">add</button>
    </div>
    <ul class="heroes">
      <li v-for="hero of heroes" :key="hero.id">
        <router-link :to="{ path: `/detail/${hero.id}`}">
          <span class="badge">{{ hero.id }}</span>
          {{ hero.name }}
        </router-link>
        <button class="delete" title="delete hero" @click="deleteHero(hero)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { heroService } from './hero.service';

export default {
  name: 'Heroes',
  data: function() {
    return {
      heroName: null,
      heroes: []
    };
  },
  created() {
    this.getHeroes();
  },
  methods: {
    getHeroes() {
      // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      // TODO: DI
      heroService.getHeroes().then(heroes => (this.heroes = heroes));
    },
    add(name) {
      name = name.trim();
      if (!name) {
        return;
      }
      heroService.addHero({ name }).then(hero => {
        // TODO: use server instead
        this.heroes.push(hero);
      });
    },
    deleteHero(hero) {
      // TODO: use server instead
      this.heroes = this.heroes.filter(h => h !== hero);
      heroService.deleteHero(hero);
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
  position: relative;
  cursor: pointer;
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

.heroes a {
  color: #333;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color: #607d8b;
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
  min-width: 16px;
  text-align: right;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
}
</style>
