import { Component, OnInit } from '@angular/core';
import { QuestionsServiceClient } from '../../services/question.service.client'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = []
  quizId = ''

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type':'application/json'
      }
    }).then(response => response.json())
    .then(result => console.log(result))
  }

  constructor(private service : QuestionsServiceClient,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.qid;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(qs => 
            {
              console.log(qs)
              this.questions = qs
            });
          })
        }
}
