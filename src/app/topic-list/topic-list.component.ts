import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TopicService } from '../../services/TopicServiceClient'

@Component({
  selector: 'app-topic-list-component',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

topics = []
lessonID = ''

createTopic = () => {
  let topic = this.topicService.createTopic(this.lessonID);
  this.topics.push(topic);
}

constructor(private activatedRoute: ActivatedRoute,
            private topicService: TopicService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(updatedParams => {
        console.log(updatedParams);
        this.lessonID = updatedParams.lessonId;
        const lessonId = updatedParams.lessonId;
        if (typeof lessonId !== 'undefined' && lessonId !== '') {
            this.topicService.findTopicsForLesson(lessonId)
            .then(topics => this.topics = topics);
        }
    });
  }

}
