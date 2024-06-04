import { Component } from '@angular/core';
import { SannarLogoComponent } from '../sannar-logo/sannar-logo.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SannarLogoComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
