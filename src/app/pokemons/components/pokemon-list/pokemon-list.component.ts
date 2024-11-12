import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    PokemonCardComponent
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {

  public pokemonsList = input.required<SimplePokemon[]>();

}
