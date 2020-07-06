<template>
  <div id="search-component">
    <h4>
      <label for="search-box">Hero Search</label>
    </h4>

    <!-- <input #searchBox id="search-box" @input="search(searchBox.value)" /> -->
    <input id="search-box" @input="search($event.target.value)" />

    <ul class="search-result">
      <!-- <li *ngFor="let hero of heroes$ | async">
        <a routerLink="/detail/{{hero.id}}">{{hero.name}}</a>
      </li>-->
      <li v-for="(hero, index) of heroes" :key="index">
        <router-link :to="{ path: `/detail/${hero.id}`}">{{hero.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { heroService } from './hero.service';

export default {
  name: 'HeroSearchComponent',
  data: function() {
    return {
      //   heroes$: null,
      //   searchTerms: new Subject()
      heroes: []
    };
  },
  // created() {
  // this.heroes$ = this.searchTerms.pipe(
  //   // wait 300ms after each keystroke before considering the term
  //   debounceTime(300),
  //   // ignore new term if same as previous term
  //   distinctUntilChanged(),
  //   // switch to new search observable each time the term changes
  //   switchMap(term => this.heroService.searchHeroes(term))
  // );
  // },
  methods: {
    // Push a search term into the observable stream.
    search(term) {
      //   this.searchTerms.next(term);
      this.searchTerms(term);
    },
    searchTerms(term) {
      // TODO: 防抖节流
      heroService.searchHeroes(term).then(heroes => (this.heroes = heroes));
    }
  }
};
</script>

<style scoped>
/* HeroSearch private styles */
.search-result li {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}

.search-result li:hover {
  background-color: #607d8b;
}

.search-result li a {
  color: #888;
  display: block;
  text-decoration: none;
}

.search-result li a:hover {
  color: white;
}
.search-result li a:active {
  color: white;
}
#search-box {
  width: 200px;
  height: 20px;
}

ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>
