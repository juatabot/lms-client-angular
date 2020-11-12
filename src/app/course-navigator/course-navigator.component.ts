import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/services/course-service';
import { ModuleService } from 'src/services/module-service';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];

  courseId = '';

  selectedCourse = {};

  modules = [];

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
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

  selectCourse(courseId): void {
    this.selectedCourse = courseId;
  }

  editing(course): void {
    course.editing = true;
  }

  save(course): void {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  ngOnInit(): void {
    this.courseService.fetchAllCourses()
      .then(c => this.courses = c);
    this.activatedRoute.params.subscribe(params => {
      if (typeof params.courseId) {
        this.courseId = params.courseId;
      }
    })
  }

}
