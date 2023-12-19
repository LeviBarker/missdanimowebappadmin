import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CRUDService} from "../../services/crud.service";
import {Project} from "../../models/project";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects$: Observable<(Project & { id: string })[]> | undefined;
  private projectService = new CRUDService<Project>("projects");

  constructor() {
    this.projects$ = this.projectService.getAll()
  }

  async deleteProject(id: string) {
    await this.projectService.delete(id);
  }

  async createProject() {
    await this.projectService.create({
      title: "New"
    });
  }
}
