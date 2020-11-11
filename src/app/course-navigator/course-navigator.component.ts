import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/services/course-service';
import { ModuleService } from 'src/services/module-service';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [
    {
      id: "1",
      title: "Course 1",
      editing: false,
    },
    {
      id: "2",
      title: "Course 2",
      editing: false,
    },
    {
      id: "1",
      title: "Course 3",
      editing: false,
    }
  ];

  selectedCourse = {};

  modules = []

  constructor(
    private courseService: CourseService,
    private moduleService: ModuleService
  ) { }

  createCourse(): void {
    this.courseService.createCourse()
      .then(actualCourse =>
        this.courses.push(actualCourse));
  }

  deleteCourse(course): void {
    this.courseService.deleteCourse(course)
      .then(status => this.courses = this.courses.filter(c => c !== course));
  }

  selectCourse(course): void {
    this.selectedCourse = course;
    this.moduleService.findModulesForCourse(course)
      .then(modules => this.modules = modules);
  }

  editing(course): void {
    course.editing = true;
  }

  save(course): void {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  createModuleForCourse(course): void {
    this.moduleService.createModuleForCourse(course)
      .then(actualModule => this.modules.push(actualModule));
  }

  deleteModule(module): void {
    this.moduleService.deleteModule(module)
      .then(status => this.modules = this.modules.filter(m => m !== module));
  }

  ngOnInit(): void {
    this.courseService.fetchAllCourses()
      .then(c => this.courses = c);
  }

}
