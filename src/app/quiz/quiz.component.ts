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
