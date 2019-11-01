import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    validate(paaswordGroup: AbstractControl) : {[key: string]: any} | null  {
        const passwordField = paaswordGroup.get('password');
        const confirmPasswordField = paaswordGroup.get('confirmPassword');
        if(passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
          return { 'notEqual': true };
        }

        return null;
    }
}
