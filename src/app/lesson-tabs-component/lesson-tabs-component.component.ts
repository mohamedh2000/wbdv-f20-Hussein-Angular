import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LessonService } from '../../services/LessonServiceClient'

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

lessons = []
moduleID = ''
courseID = ''

createLesson = () => {
  let lesson = this.lessonService.createLesson(this.moduleID);
  this.lessons.push(lesson);
}

constructor(private activatedRoute: ActivatedRoute,
            private lessonService: LessonService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(updatedParams => {
        console.log(updatedParams);
        this.courseID = updatedParams.courseId;
        this.moduleID = updatedParams.moduleId;
        const moduleId = updatedParams.moduleId;
        if (typeof moduleId !== 'undefined' && moduleId !== '') {
            this.lessonService.findLessonsForModule(moduleId)
            .then(lessons => this.lessons = lessons);
        }
    });


  }

}
