import { Component } from '@angular/core';
import * as data from '../../../assets/data/content.json'

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.css'
})
export class InfoSectionComponent {

  infoContent = data.HOME_PAGE.SECTIONS.find(section => section.TYPE === 'info')?.CONTENT.INFO_SECTION;
  introTitle: any = this.infoContent?.INTRO_TITLE;
  introDescription: any = this.infoContent?.INTRO_DESCRIPTION;
}
