import { AbstractControl } from '@angular/forms'

export const passwordFormatValidator = (control: AbstractControl) => {
  if (!control.value.match(/\d/)) {
    return { notDigitInPassword: true }
  }

  if (!control.value.match(/.*[a-z].*/)) {
    return { notLowerCharacterPassword: true }
  }

  if (!control.value.match(/.*[A-Z].*/)) {
    return { notUpperCharacterPassword: true }
  }

  return null
}
