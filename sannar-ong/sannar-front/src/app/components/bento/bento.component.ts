import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../../assets/data/content.json'

@Component({
  selector: 'app-bento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bento.component.html',
  styleUrl: './bento.component.css'
})
export class BentoComponent {

  bentoContent = data.HOME_PAGE.SECTIONS.find(section => section.TYPE === 'bentoGrid')?.CONTENT.BENTO_ITEMS;
}
