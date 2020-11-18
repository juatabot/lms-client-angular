import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseService } from 'src/services/course-service';
import { ModuleService } from 'src/services/module-service';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { LessonService } from 'src/services/lesson-service';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizService } from '../services/quiz-service';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionService } from '../services/question-service';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseViewerComponent,
    QuizListComponent,
    QuizComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService, ModuleService, LessonService, QuizService, QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
