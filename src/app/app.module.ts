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

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    ModuleListComponent,
    LessonTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService, ModuleService, LessonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
