import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId = '';
  questions = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (typeof params.quizId) {
        this.quizId = params.quizId;
        this.questionService.findAllQuestionsForQuiz(this.quizId)
          .then(questions => this.questions = questions);
      }
    })
  }

}
