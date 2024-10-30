import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  //selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact from component ts')
    this.meta.updateTag({ name: 'description', content: 'Esta es mi Contact Page' })
    this.meta.updateTag({ name: 'og:title', content: 'Esta es mi Contact Page' })
    this.meta.updateTag(
      {
        name: 'keywords',
        content: 'Hola,Mundo,Angular,Pro'
      }
    )
  }

}
