import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = { _id: '', title: '', question: '', options: [], answer: '', correct: '' }

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
