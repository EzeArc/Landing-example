import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton} from '@angular/material/button'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatIcon} from '@angular/material/icon'
import { MatInput} from '@angular/material/input'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButton,MatFormFieldModule, MatIcon, MatInput, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly _router = inject(Router);
  
  clickSingUp(): void {
    this._router.navigate(['/home']);
  }
}
