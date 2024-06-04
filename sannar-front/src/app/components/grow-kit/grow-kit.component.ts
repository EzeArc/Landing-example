import { Component } from '@angular/core';
import * as data from '../../../assets/data/content.json'
@Component({
  selector: 'app-grow-kit',
  standalone: true,
  imports: [],
  templateUrl: './grow-kit.component.html',
  styleUrl: './grow-kit.component.css'
})
export class GrowKitComponent {

  growSection: any = data.ABOUT_PAGE.SECTIONS.find(section => section.TYPE === 'grow-kit')?.CONTENT;
}
