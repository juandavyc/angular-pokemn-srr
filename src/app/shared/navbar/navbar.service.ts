import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private router = inject(Router);

  constructor() {



  }

  getNavigationRoutes(): Route[] {
    return this.router.config.flatMap(route =>
      // devolvere un array
      [ // devuelve la ruta y si tiene hijos se la agrega, si no no hace nada
        route, ...(route.children || [])
      ]
    ).filter((route) => route.data?.['showInNavbar']) // solo los true

  }

}
