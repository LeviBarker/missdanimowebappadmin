import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firebaseLoginError',
  standalone: true
})
export class FirebaseLoginErrorPipe implements PipeTransform {

  transform(value?: string): string {
    // @ts-ignore
    return value ? {
      "auth/too-many-requests": "Too many login attempts, please try again later",
      "auth/invalid-credential": "Invalid credentials, please check your email and password"
    }[value] : "";
  }

}
