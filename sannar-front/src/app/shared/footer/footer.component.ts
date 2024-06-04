import { Component } from '@angular/core';
import { SannarLogoComponent } from '../sannar-logo/sannar-logo.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SannarLogoComponent,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
