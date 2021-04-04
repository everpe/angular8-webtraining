/**
 * Representa un objeto proyecto
 */
import { Component, Input, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
@Component({
  selector: 'app-single-projects',
  templateUrl: './single-projects.component.html',
  styleUrls: ['./single-projects.component.scss']
})
export class SingleProjectsComponent implements OnInit {

  @Input() project:Project;
  constructor( ) { }

  ngOnInit(): void {
  }

}
