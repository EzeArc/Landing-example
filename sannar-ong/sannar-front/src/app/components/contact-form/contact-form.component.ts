import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton} from '@angular/material/button'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatIcon} from '@angular/material/icon'
import { MatInput} from '@angular/material/input'
import { WeedWalkingComponent } from '../weed-walking/weed-walking.component';
import { BubbleMsgComponent } from '../bubble-msg/bubble-msg.component';
import * as data from '../../../assets/data/content.json'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [MatButton,MatFormFieldModule, MatIcon, MatInput, ReactiveFormsModule, WeedWalkingComponent, BubbleMsgComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  formSection:any= data.CONTACT_PAGE.SECTIONS.find(section => section.TYPE === 'formSection')?.CONTENT;
}
