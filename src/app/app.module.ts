import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms'
import { CourseService } from '../services/CourseServiceClient'
import { ModuleService } from '../services/ModuleServiceClient'
import { LessonService } from '../services/LessonServiceClient';
import { TopicService } from '../services/TopicServiceClient';
import { QuizzesServiceClient } from '../services/quiz.service.client'
import { QuestionsServiceClient } from '../services/question.service.client'
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import { CourseTableComponentComponent } from './course-table-component/course-table-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponentComponent,
    CourseTableComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicListComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CourseService, ModuleService, LessonService, 
              TopicService, QuizzesServiceClient, QuestionsServiceClient],
  bootstrap: [AppComponent]
})

export class AppModule { }
