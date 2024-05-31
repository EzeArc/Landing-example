import { AbstractControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

//Expresión regular validá el texto = 1 minuscula, mayuscula, número, symbolo y longitud >=8
const patternPassword = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8}');


export const customPasswordValidator = (control: AbstractControl<string>): ValidationErrors | null => {
	const value = control.value;

	if (!patternPassword.test(value)) {
		return { customPasswordValidator: true };
	}

	return null;
};


//Validá si las contraseñas coinciden
export const crossPasswordMatchingValidatior: ValidatorFn = (
	formGroupControl: AbstractControl<{ password: string; confirmPassword: string }>
): ValidationErrors | null => {
	const password = formGroupControl.value.password;
	const confirmPassword = formGroupControl.value.confirmPassword;

	return password !== confirmPassword ? { crossConfirmPasswordError: true } : null;
};

export class PasswordStateMatcher implements ErrorStateMatcher {
	isErrorState(control: AbstractControl, form: FormGroupDirective | NgForm): boolean {
		if (!control || !control.parent) {
			return false;
		}
		return control.parent.hasError('crossConfirmPasswordError');
	}
}