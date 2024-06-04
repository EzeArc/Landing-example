import { Component } from '@angular/core';
import * as data from '../../../assets/data/content.json'
@Component({
  selector: 'app-faq-group',
  standalone: true,
  imports: [],
  templateUrl: './faq-group.component.html',
  styleUrl: './faq-group.component.css'
})
export class FaqGroupComponent {
  faq:any = data.CONTACT_PAGE.SECTIONS.find(section => section.TYPE === 'faq')?.CONTENT;

}
