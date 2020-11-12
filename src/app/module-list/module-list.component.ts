import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from 'src/services/lesson-service';
import { ModuleService } from 'src/services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  moduleId = '';
  modules = []
  courseId = '';
  selectedModule = '';
  lessons = []

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

  selectModule(moduleId): void {
    this.selectedModule = moduleId;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const courseId = params.courseId;
      this.courseId = courseId;
      if (typeof courseId !== 'undefined') {
        this.moduleService.findModulesByCourseId(courseId)
          .then(modules => this.modules = modules);
      }

      const moduleId = params.moduleId;
      this.moduleId = moduleId;
    });
  }

}
