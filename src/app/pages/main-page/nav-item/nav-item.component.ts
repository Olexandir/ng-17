import { Component, Input } from '@angular/core';
import { NavItem } from '../interfaces/main-page.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() public navItem!: NavItem;

  constructor() {}
}
