import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';

const routes: Routes = [
  {path: '', component: CourseViewerComponentComponent},
  {path: 'courses', component: CourseViewerComponentComponent},
  {path: 'courses/:courseId/modules', component: ModuleListComponentComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons', component: ModuleListComponentComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: ModuleListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
