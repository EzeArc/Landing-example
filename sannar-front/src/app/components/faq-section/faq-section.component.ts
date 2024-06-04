import { Component } from '@angular/core';
import { FaqGroupComponent } from '../faq-group/faq-group.component';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [FaqGroupComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css'
})
export class FaqSectionComponent {

}
