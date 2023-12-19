import {Routes} from '@angular/router';
import {ProjectsComponent} from "../features/projects/projects.component";
import {AppComponent} from "./app.component";
import {ProjectComponent} from "../features/projects/project/project.component";

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectComponent
  }
];
