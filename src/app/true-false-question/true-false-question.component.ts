import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}
  grading = false
  finalAnswer = null

  grade = () => { this.grading = true 
                  this.finalAnswer = this.question.answer}
  
  changeAnswer(ans) {
    this.question.answer = ans;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

