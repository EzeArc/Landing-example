import { Component } from '@angular/core';
import { SannarLogoComponent } from '../sannar-logo/sannar-logo.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,SannarLogoComponent,RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
