import { HEROES } from './mock-heroes';
import store from '../store';

export function getHeroes() {
  // TODO: send the message _after_ fetching the heroes
  // this.messageService.add('HeroService: fetched heroes');
  // return of(HEROES);

  store.commit('add', 'HeroService: fetched heroes');
  return new Promise(resolve => resolve(HEROES));
}
