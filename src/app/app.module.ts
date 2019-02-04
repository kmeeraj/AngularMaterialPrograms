import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSortModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import {CourseResolver} from './services/CourseResolver';
import {CoursesService} from './services/courses.service';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TopMenuComponent,
    CourseCardListComponent,
    CourseComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    CourseResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]
})
export class AppModule { }
