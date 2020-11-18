import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: CourseNavigatorComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'courses/:courseId/quizzes', component: QuizListComponent },
  { path: 'courses/:courseId/modules', component: CourseViewerComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent },
  { path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/topicId/widgets', component: CourseViewerComponent },

  { path: 'quizzes/:quizId', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
