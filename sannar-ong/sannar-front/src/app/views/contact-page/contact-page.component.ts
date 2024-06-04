import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { HeroImgComponent } from '../../components/hero-img/hero-img.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import * as data from '../../../assets/data/content.json'
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [RouterOutlet, HeroImgComponent,ContactFormComponent,FaqSectionComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent {
  title= data.CONTACT_PAGE.HERO_TITLE;
}
