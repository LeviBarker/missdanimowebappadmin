import {Component} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Observable, Subscription} from "rxjs";
import {ButtonModule} from "primeng/button";
import {Project} from "../../../models/project";
import {CRUDService} from "../../../services/crud.service";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, InputTextModule, FormsModule, DropdownModule, ButtonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  project$: Observable<any> = new Observable<any>();
  routeSubscription: Subscription;
  saving: boolean = false;
  projectService = new CRUDService<Project>("projects");

  grownup_involvement = [
    "Low",
    "Medium",
    "High"
  ]

  constructor(route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => {
      this.project$ = this.projectService.getById(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  async updateProject(project: Project & {id: string}) {
    this.saving = true;
    await this.projectService.update(project);
    this.saving = false;
  }
}
