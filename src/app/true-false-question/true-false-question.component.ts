import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = { _id: '', title: '', question: '', answer: '', correct: '' }

  userAnswer;

  grading;


  constructor() { }

  changeAnswer(e): void {
    if (!this.grading) {
      this.userAnswer = e.target.value;
    }
  }

  grade(): void {
    this.grading = true;
  }

  ngOnInit(): void {

  }

}
