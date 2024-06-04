import { Component } from '@angular/core';
import { SannarLogoComponent } from '../sannar-logo/sannar-logo.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SannarLogoComponent,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
