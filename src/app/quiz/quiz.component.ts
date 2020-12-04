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
  attempts = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  submitQuiz = () => {
    console.log(this.questions);
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => this.attempts = result);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (typeof params.quizId) {
        this.quizId = params.quizId;
        this.questionService.findAllQuestionsForQuiz(this.quizId)
          .then(questions => this.questions = questions);
        fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(attempts => this.attempts = attempts);
      }
    })
  }

}
