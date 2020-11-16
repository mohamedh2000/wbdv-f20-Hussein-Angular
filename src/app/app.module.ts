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
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import { CourseTableComponentComponent } from './course-table-component/course-table-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicListComponent } from './topic-list/topic-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponentComponent,
    CourseTableComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CourseService, ModuleService, LessonService, TopicService],
  bootstrap: [AppComponent]
})

export class AppModule { }
