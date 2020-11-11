import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from 'src/services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = []

  constructor(
    private moduleService: ModuleService,
    private activatedRoute: ActivatedRoute
  ) { }

  createModuleForCourse(course): void {
    this.moduleService.createModuleForCourse(course)
      .then(actualModule => this.modules.push(actualModule));
  }

  deleteModule(module): void {
    this.moduleService.deleteModule(module)
      .then(status => this.modules = this.modules.filter(m => m !== module));
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const courseId = params.courseId;
      if (typeof courseId !== 'undefined') {
        this.moduleService.findModulesByCourseId(courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

}
