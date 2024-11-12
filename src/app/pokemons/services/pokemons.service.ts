import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Pokemon, PokemonAPIResponse, SimplePokemon } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient);

  constructor() {


  }

  public loadPage(page: number): Observable<SimplePokemon[]> {
    if (page !== 0) {
      --page;
    }
    page = Math.max(0, page);

    return this.http.get<PokemonAPIResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
      .pipe(
        map(response => {
          const simplePokemons: SimplePokemon[] = response.results.map(pokemon => {
            const parts = pokemon.url.split('/');
            const id = parts[parts.length - 2]; // obtener el penultimo
            const name = (pokemon.name).trim();
            return { name, id }
          });
          return simplePokemons;
        }),
        // tap(console.log)
      )
  }

  public loadPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}
