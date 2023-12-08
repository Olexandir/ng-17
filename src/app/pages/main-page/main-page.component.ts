import { Component } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavItem } from './interfaces/main-page.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public navItems: NavItem[] = [
    {
      title: 'Users',
      link: '/users',
    },
    {
      title: 'Todos',
      link: '/todos',
    },
    {
      title: 'Calendar',
      link: '/calendar',
    },
  ];
}
