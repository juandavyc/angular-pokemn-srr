import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {

  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);

  public pokemon = signal<Pokemon | null>(null);

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.pokemonsService.loadPokemon(id)
      .pipe(
        tap(pokemon => {
          const pageTitle = `# ${pokemon.id} - ${pokemon.name}`;
          const pageDescription = `Pagina del pokemon ${pokemon.name}`;
          const pageImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;;
          this.title.setTitle(pageTitle);

          this.meta.updateTag({ name: 'description', content: pageDescription });
          this.meta.updateTag({ name: 'og:title', content: pageDescription });
          this.meta.updateTag({ name: 'og:description', content: pageDescription });
          this.meta.updateTag({ name: 'og:image', content: pageImage });

        })
      )
      .subscribe((pokemon) => {
        this.pokemon.set(pokemon)
      });

  }


}
