import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutCardsComponent } from '../../components/about-cards/about-cards.component';
import { WeedLoaderComponent } from '../../shared/weed-loader/weed-loader.component';
import { GrowKitComponent } from '../../components/grow-kit/grow-kit.component';
import { AboutUsInfoComponent } from '../../components/about-us-info/about-us-info.component';
import * as data from '../../../assets/data/content.json'
import { HeroImgComponent } from "../../shared/hero-img/hero-img.component";

@Component({
    selector: 'app-about-page',
    standalone: true,
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.css',
    imports: [RouterOutlet, AboutCardsComponent, HeroImgComponent, WeedLoaderComponent, GrowKitComponent, AboutUsInfoComponent]
})
export class AboutPageComponent {

  title= data.ABOUT_PAGE.PAGE_TITLE;

}
