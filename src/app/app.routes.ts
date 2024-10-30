import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    data: { title: "About page-ok", showInNavbar: true },
    loadComponent: () => import('./pages/about-page/about-page.component'),
  },
  {
    path: 'pricing',
    data: { title: "Pricing Page-ewe ", showInNavbar: true },
    loadComponent: () => import('./pages/pricing-page/pricing-page.component'),
  },
  {
    path: 'contact',
    data: { title: "Contact Page-uwu", showInNavbar: true },
    loadComponent: () => import('./pages/contact-page/contact-page.component'),
  },
  {
    path: 'login',
    data: { title: "My Login Page, don't show this", showInNavbar: false },
    loadComponent: () => import('./pages/contact-page/contact-page.component'),
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];
