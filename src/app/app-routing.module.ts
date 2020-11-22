import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: CourseViewerComponentComponent},
  {path: 'courses', component: CourseViewerComponentComponent},
  {path: 'courses/:courseId/modules', component: ModuleListComponentComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons', component: ModuleListComponentComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: ModuleListComponentComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:qid', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
