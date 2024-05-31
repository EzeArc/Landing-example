import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutCardsComponent } from '../../components/about-cards/about-cards.component';
import { HeroImgComponent } from '../../components/hero-img/hero-img.component';
import { WeedLoaderComponent } from '../../shared/weed-loader/weed-loader.component';
import { GrowKitComponent } from '../../components/grow-kit/grow-kit.component';
import { AboutUsInfoComponent } from '../../components/about-us-info/about-us-info.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterOutlet, AboutCardsComponent, HeroImgComponent, WeedLoaderComponent, GrowKitComponent, AboutUsInfoComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
