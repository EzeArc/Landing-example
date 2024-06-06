import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import * as data from '../../../assets/data/content.json'
import { HeroImgComponent } from "../../shared/hero-img/hero-img.component";
@Component({
    selector: 'app-contact-page',
    standalone: true,
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css',
    imports: [RouterOutlet, ContactFormComponent, FaqSectionComponent, HeroImgComponent]
})
export default class ContactPageComponent {
  title= data.CONTACT_PAGE.HERO_TITLE;
}
