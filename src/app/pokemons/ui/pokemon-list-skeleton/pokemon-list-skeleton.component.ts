import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemon-list-skeleton',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pokemon-list-skeleton.component.html',
  styleUrl: './pokemon-list-skeleton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListSkeletonComponent { }
