import { Component, OnInit } from '@angular/core';
import {ProjectsService} from './services/projects.service';
import {Project} from './models/project.model';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects:Array<Project>;

  constructor(public projectsService:ProjectsService) {
   }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(
      
      projects=>this.projects=projects,
      error=>console.error(error),
    );
  }

}
