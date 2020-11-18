import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz-service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  courseId = '';
  quizzes = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const courseId = params.courseId;
      this.courseId = courseId;
      if (typeof courseId !== 'undefined') {
        this.quizService.findAllQuizzesForCourse(courseId)
          .then(quizzes => this.quizzes = quizzes);
      }
    })
  }
}
