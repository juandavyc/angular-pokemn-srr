import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  //selector: 'app-pricing-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {

    // console.log('Platform:', this.platform);

    // si esta en el cliente
    // if(isPlatformBrowser(this.platform)){
    //   document.title = "Pricing title Browser";
    // }

    //
    this.title.setTitle('Pricing from component ts')
    this.meta.updateTag({ name: 'description', content: 'Esta es mi Pricing Page' })
    this.meta.updateTag({ name: 'og:title', content: 'Esta es mi Pricing Page' })
    this.meta.updateTag(
      {
        name: 'keywords',
        content: 'Hola,Mundo,Angular,Pro'
      }
    )
  }
}
