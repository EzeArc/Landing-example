import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { HeroImgComponent } from '../../components/hero-img/hero-img.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [RouterOutlet, HeroImgComponent,ContactFormComponent,FaqSectionComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent {

}
