import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

const routes: Routes = [
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'courses/:courseId/modules', component: CourseNavigatorComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseNavigatorComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseNavigatorComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/topicId/widgets', component: CourseNavigatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
