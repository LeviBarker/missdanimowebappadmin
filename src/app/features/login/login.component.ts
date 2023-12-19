import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  async signIn() {
    const success = await this.authService.signInWithEmailAndPassword(this.email, this.password);
    if(success) {
      await this.router.navigate([''])
    }
  }
}
