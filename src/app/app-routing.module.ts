import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';

const routes: Routes = [
  { path: '', component: CourseNavigatorComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'courses/:courseId/modules', component: CourseViewerComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/topicId/widgets', component: CourseViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
