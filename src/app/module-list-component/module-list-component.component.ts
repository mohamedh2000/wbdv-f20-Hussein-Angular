import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ModuleService } from '../../services/ModuleServiceClient'

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  modules = []
  courseID = ''
  selectedModule = "";


createModule = () => {
        let module = this.moduleService.createModule(this.courseID);
        this.modules.push(module);
  }

  selectModule = (module) => {
    this.selectedModule = module.title;
  }

constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(updatedParams => {
      console.log(updatedParams);
      this.courseID = updatedParams.courseId;
      const courseId = updatedParams.courseId;
      if (typeof courseId !== 'undefined' && courseId !== '') {
        this.moduleService.findModulesForCourse(courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

}
