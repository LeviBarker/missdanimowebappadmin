import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {Auth, User, signOut} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'missdanimowebappadmin';
  user: User | null | undefined;

  constructor(private auth: Auth, private router: Router) {
    auth.onAuthStateChanged(user => {
      this.user = user;
    })
  }

  async handleSignOut() {
    await signOut(this.auth);
    await this.router.navigate(['login']);
  }
}
