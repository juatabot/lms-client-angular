import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = { _id: '', title: '', question: '', answer: '', correct: '' }
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
