import { Component, inject } from '@angular/core';
import { FormControl,NonNullableFormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { crossPasswordMatchingValidatior, customPasswordValidator, PasswordStateMatcher } from './register-custom.validator';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButton, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

	private readonly _formBuilder = inject(NonNullableFormBuilder);
	passwordStateMatcher = new PasswordStateMatcher();

	// formGroup = new FormGroup({
	// 	names: new FormControl('', { validators: Validators.required, nonNullable: true }),
	// });

	formGroup = this._formBuilder.group(
		{
			names: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [customPasswordValidator, Validators.required]],
			confirmPassword: ['', Validators.required]
		},
		{
			validators: crossPasswordMatchingValidatior
		}
	);

  clickRegister(): void {
		// Acceder al valor de un input
		const namesOld = this.formGroup.get('names')?.value;
		const namesNew = this.formGroup.controls.names.value;
		console.log(namesNew);

		// Acceder al estado de validación de un input
		const nameIsValid = this.formGroup.controls.names.valid;
		console.log(nameIsValid);

		// Acceder al estado de validación de todo el formulario
		const formGroupIsValid = this.formGroup.valid;
		console.log(formGroupIsValid);

		// Acceder al estado de interacción de un control
		const nameIsDirty = this.formGroup.controls.names.dirty;
		console.log(nameIsDirty);

		// Acceder al estado de validación de todo el formulario
		const formGroupIsDirty = this.formGroup.dirty;
		console.log(formGroupIsDirty);
		//#endregion

		//#region ERRORS
		// Acceder a los errores de un control
		const nameErrors = this.formGroup.controls.names.errors;
		console.log(nameErrors);

		// Acceder al estado de validación de todo el formulario
		const formGroupErrors = this.formGroup.errors;
		console.log(formGroupErrors);

		// verificar si un control incumplió una validacion

		console.log(this.formGroup.controls.names.hasError('required'));

		//#endregion

		if (this.formGroup.valid) {
			const user = this.formGroup.getRawValue();
		}
	}

	//Getter and setters
	get firtsField(): FormControl<string> {
		return this.formGroup.controls.names;
	}

	get lastNameField(): FormControl<string> {
		return this.formGroup.controls.lastName;
	}

	get emailField(): FormControl<string> {
		return this.formGroup.controls.email;
	}

	get passwordField(): FormControl<string> {
		return this.formGroup.controls.password;
	}

	get confirmPasswordField(): FormControl<string> {
		return this.formGroup.controls.confirmPassword;
	}

}
