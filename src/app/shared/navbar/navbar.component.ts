//import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Route, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
   // CommonModule,
  //  RouterLink
  RouterLink, RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  private navbarService = inject(NavbarService);
  private routes: Route[] = [];
  constructor() {

  }
  ngOnInit(): void {
    this.routes = this.navbarService.getNavigationRoutes();
  }

  get navigationRoutes(): Route[] {
    return (this.routes);
  }

}
