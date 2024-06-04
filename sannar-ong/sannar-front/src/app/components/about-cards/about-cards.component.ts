import { Component } from '@angular/core';
import * as data from '../../../assets/data/content.json'
@Component({
  selector: 'app-about-cards',
  standalone: true,
  imports: [],
  templateUrl: './about-cards.component.html',
  styleUrl: './about-cards.component.css'
})
export class AboutCardsComponent {

  aboutCards: any = data.ABOUT_PAGE.SECTIONS.find(section => section.TYPE === 'cards')?.CONTENT;
}
