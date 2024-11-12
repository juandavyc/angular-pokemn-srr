import { ChangeDetectionStrategy, Component, signal, OnInit, inject, ApplicationRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from '../../pokemons/ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [
    CommonModule,
    PokemonListComponent,
    PokemonListSkeletonComponent
  ],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit /*, OnDestroy*/ {

  // public currentName = signal('David');

  private pokemonsService = inject(PokemonsService);
  public pokemons = signal<SimplePokemon[]>([]);

  // pagina en la que estoy, parametros etc
  private route = inject(ActivatedRoute);
  private router = inject(Router)
  // convertir a senial
  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map(params => params.get('page') ?? '1'), // obener y si es null deveulva un 1
      map(page => (isNaN(Number(page)) ? 1 : Number(page))), // si no es un numero, 1 de lo contrario la pagina
      map(page => Math.max(1, page)) // siempre sea uno o mas
    )
  );

  private title = inject(Title);

  ngOnInit(): void {
    // console.log(this.currentPage());
    this.loadPokemons(0);
  }

  public loadPokemons(page: number = 0): void {
    const pageToLoad = this.currentPage()! + page;

    this.pokemonsService.loadPage(pageToLoad)
      .pipe(
        tap(() => {
          this.router.navigate([], { queryParams: { page: pageToLoad } }) // enviar a la url, cambia los query params
        }
        ),tap(
          ()=>{
            this.title.setTitle(`Pokemon SSR ${pageToLoad}`)
          }
        )
      )
      .subscribe(pokemons => {
        this.pokemons.set(pokemons)
      });
  }

  // public isLoading = signal(true);

  // private appRef = inject(ApplicationRef);
  // private $appState = this.appRef.isStable.subscribe(isStable => {

  //   console.log('isStable:', isStable);
  // })


  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.isLoading.set(false)
  //   }, 5000)
  // }

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }
}
