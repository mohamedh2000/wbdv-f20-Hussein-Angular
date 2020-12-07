import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' }
  grading = false

  @Input()
  answer=""

  @Output()
  answerChange = new EventEmitter<string>();

  grade = () => { this.grading = true; }

  changeAnswer(ans) {
    this.question.answer = ans;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
