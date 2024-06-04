import { Component } from '@angular/core';
import * as data from '../../../assets/data/content.json'

@Component({
  selector: 'app-about-us-info',
  standalone: true,
  imports: [],
  templateUrl: './about-us-info.component.html',
  styleUrl: './about-us-info.component.css'
})
export class AboutUsInfoComponent {
  aboutContent: any;
  constructor() {
    // Verifica que data.ABOUT_PAGE.SECTIONS esté cargado antes de asignar los valores
    this.aboutContent = data.ABOUT_PAGE.SECTIONS.find(section => section.TYPE === 'about-intro')?.CONTENT;
  }
  
}
