import { Component, OnInit } from '@angular/core';
import { QuizzesServiceClient } from '../../services/quiz.service.client'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizzes-component',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = []
  courseId = ''
  constructor(private service : QuizzesServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes)
    })

  }

}
