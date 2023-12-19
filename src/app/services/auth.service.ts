import {Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {
  }

  onStateChanged() {
    return this.auth.onAuthStateChanged
  }

  async signInWithEmailAndPassword(email?: string, password?: string) {
    if (!(email && password)) {
      return false;
    }
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    return true;
  }

}
