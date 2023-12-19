import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PasswordModule} from "primeng/password";
import {FirebaseLoginErrorPipe} from "../../pipes/firebase-login-error.pipe";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    FirebaseLoginErrorPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email?: string;
  password?: string;
  error?: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  async signIn() {
    try {
      await this.authService.signInWithEmailAndPassword(this.email, this.password);
      await this.router.navigate(['']);
    } catch (e: any) {
      this.error = e['code'];
    }
  }
}
