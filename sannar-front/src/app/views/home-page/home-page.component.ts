import { Component } from '@angular/core';
import { HeroContainerComponent } from '../../components/hero-container/hero-container.component';
import { InfoSectionComponent } from '../../components/info-section/info-section.component';
import { BentoComponent } from '../../components/bento/bento.component';
//import '@fontsource-variable/onest';
import { WeedLoaderComponent } from '../../shared/weed-loader/weed-loader.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroContainerComponent, InfoSectionComponent, BentoComponent, WeedLoaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent {

}
