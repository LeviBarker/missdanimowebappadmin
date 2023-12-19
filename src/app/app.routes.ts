import {Routes} from '@angular/router';
import {ProjectsComponent} from "./features/projects/projects.component";
import {AppComponent} from "./app.component";
import {ProjectComponent} from "./features/projects/project/project.component";
import {AuthGuard, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard"
import {LoginComponent} from "./features/login/login.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectAuthorizedToHome = () => redirectLoggedInTo(['']);

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectAuthorizedToHome }
  },
];
