import { HEROES } from './mock-heroes';
import store from '../store';

function getHeroes() {
  // TODO: send the message _after_ fetching the heroes
  // this.messageService.add('HeroService: fetched heroes');
  // return of(HEROES);

  store.commit('add', 'HeroService: fetched heroes');
  return new Promise(resolve => resolve(HEROES));
}

function getHero(id) {
  // TODO: send the message _after_ fetching the hero
  store.commit('add', `HeroService: fetched hero id=${id}`);
  return new Promise(resolve => resolve(HEROES.find(hero => hero.id === id)));
}

export { getHeroes, getHero };
