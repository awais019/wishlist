import { AbstractControl, ValidationErrors } from '@angular/forms';

export function createInvalidDomainValidator(hosts: string[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toString().toLowerCase();

    if (!value) {
      return null;
    }
    const matches = hosts.some((host) => value.endsWith('@' + host));

    return matches ? { invalidEmailDomain: true } : null;
  };
}
