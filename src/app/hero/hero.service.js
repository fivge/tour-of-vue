import { http, handleError } from '../http.service';
import store from '../store';
import { environment } from '../../environments/environments';

class HeroService {
  constructor(HttpClient) {
    this.http = HttpClient;
  }

  heroesUrl = `${environment.api}/api/heroes`;

  /** GET heroes from the server */
  async getHeroes() {
    const _ = await this.http({
      url: this.heroesUrl,
      method: 'get'
    });
    this.log('fetched heroes');
    return _;

    // return this.http.get<Hero[]>(this.heroesUrl)
    // .pipe(
    //   tap(_ => this.log('fetched heroes')),
    //   catchError(this.handleError<Hero[]>('getHeroes', []))
    // );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id) {
    const url = `${this.heroesUrl}/${id}`;
    return this.http({
      url,
      method: 'get'
    }).then(_ => {
      this.log(`fetched hero id=${id}`);
      return _;
    });

    // return this.http.get<Hero>(url).pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404(id) {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http({
      url,
      method: 'get'
    })
      .then(heroes => heroes[0])
      .then(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} hero id=${id}`);
        return h;
      });

    // return this.http.get<Hero[]>(url)
    //   .pipe(
    //     map(heroes => heroes[0]), // returns a {0|1} element array
    //     tap(h => {
    //       const outcome = h ? `fetched` : `did not find`;
    //       this.log(`${outcome} hero id=${id}`);
    //     }),
    //     catchError(this.handleError<Hero>(`getHero id=${id}`))
    //   );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term) {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // return of([]);
      return new Promise(resolve => resolve([]));
    }
    return this.http({
      url: `${this.heroesUrl}/?name=${term}`,
      method: 'get'
    }).then(x => {
      x.length ? this.log(`found heroes matching "${term}"`) : this.log(`no heroes matching "${term}"`);
      return x;
    });

    // return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    //   tap(x => x.length ?
    //      this.log(`found heroes matching "${term}"`) :
    //      this.log(`no heroes matching "${term}"`)),
    //   catchError(this.handleError<Hero[]>('searchHeroes', []))
    // );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero) {
    return this.http({
      url: this.heroesUrl,
      method: 'post',
      params: hero
    }).then(newHero => {
      this.log(`added hero w/ id=${newHero.id}`);
      return newHero;
    });

    // return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    //   tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    //   catchError(this.handleError<Hero>('addHero'))
    // );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero) {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http({
      url,
      method: 'delete'
    }).then(_ => {
      this.log(`deleted hero id=${id}`);
      return _;
    });

    // return this.http.delete<Hero>(url, this.httpOptions).pipe(
    //   tap(_ => this.log(`deleted hero id=${id}`)),
    //   catchError(this.handleError<Hero>('deleteHero'))
    // );
  }

  /** PUT: update the hero on the server */
  updateHero(hero) {
    return this.http({
      url: this.heroesUrl,
      method: 'put',
      params: hero
    }).then(_ => {
      this.log(`updated hero id=${hero.id}`);
      return _;
    });

    // return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    //   tap(_ => this.log(`updated hero id=${hero.id}`)),
    //   catchError(this.handleError<any>('updateHero'))
    // );
  }

  /** Log a HeroService message with the MessageService */
  log = message => {
    store.commit('add', `HeroService: ${message}`);
    // this.messageService.add(`HeroService: ${message}`);
  };
}

let heroService = new HeroService(http);

export { heroService };
