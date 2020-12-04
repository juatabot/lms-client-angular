import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = { _id: '', title: '', question: '', choices: [], answer: '', correct: '' }
  @Input()
  answer;

  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  grading;


  constructor() { }

  changeAnswer(e): void {
    if (!this.grading) {
      this.answer = e.target.value;
    }
  }

  grade(): void {
    this.grading = true;
  }

  ngOnInit(): void {

  }

}
