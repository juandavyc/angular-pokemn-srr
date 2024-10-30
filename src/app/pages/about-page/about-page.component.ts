import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  //selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About form component.ts')
    this.meta.updateTag({ name: 'description', content: 'Esta es mi About page' })
    this.meta.updateTag({ name: 'og:title', content: 'Esta es mi About page' })
    this.meta.updateTag(
      {
        name: 'keywords',
        content: 'Hola,Mundo,Angular,Pro'
      }
    )

  }
}
