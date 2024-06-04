import { Component } from '@angular/core';
import * as data from '../../../assets/data/content.json'


@Component({
  selector: 'app-hero-container',
  standalone: true,
  imports: [],
  templateUrl: './hero-container.component.html',
  styleUrl: './hero-container.component.css'
})
export class HeroContainerComponent {

title: string = data.HOME_PAGE.HERO_TITLE
subtitle:string = data.HOME_PAGE.HERO_SUBTITLE
button: string = data.HOME_PAGE.HERO_BUTTON

}
