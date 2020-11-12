import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from 'src/services/lesson-service';


@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  lessons = []
  courseId = '';
  moduleId = '';
  selectedLesson = '';

  constructor(
    private lessonService: LessonService,
    private activatedRoute: ActivatedRoute
  ) { }

  createLessonForModule(moduleId): void {
    this.lessonService.createLessonForModule(moduleId)
      .then(actualLesson => this.lessons.push(actualLesson));
  }

  selectLesson(lessonId): void {
    this.selectedLesson = lessonId;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const courseId = params.courseId;
      this.courseId = courseId;

      const moduleId = params.moduleId;
      this.moduleId = moduleId;
      if (typeof moduleId !== 'undefined') {
        this.lessonService.findLessonsForModule(moduleId)
          .then(lessons => this.lessons = lessons);
      }

    });
  }

}
