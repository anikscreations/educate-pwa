import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { MainService } from 'src/shared/services/main.service';

import { LoginComponent } from './student/login/login.component';
import { SignupComponent } from './student/signup/signup.component';
import { StudentComponent } from './student/student.component';

import { TeacherComponent } from './teacher/teacher.component';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { TeacherSignupComponent } from './teacher/teacher-signup/teacher-signup.component';
import { TeacherMainComponent } from './teacher/teacher-main/teacher-main.component';
import { StudentMainComponent } from './student/student-main/student-main.component';

import { StudentService } from 'src/shared/services/student.service';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentProfileNavbarComponent } from './student/student-profile/student-profile-navbar/student-profile-navbar.component';
import { TeacherProfileNavbarComponent } from './teacher/teacher-profile/teacher-profile-navbar/teacher-profile-navbar.component';
import { AuthService } from 'src/shared/services/auth.service';
import { TeacherService } from 'src/shared/services/teacher.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,
    StudentComponent,
    TeacherComponent,
    TeacherSignupComponent,
    TeacherLoginComponent,
    TeacherMainComponent,
    StudentMainComponent,
    TeacherProfileComponent,
    StudentProfileComponent,
    StudentProfileNavbarComponent,
    TeacherProfileNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }, MainService, StudentService, AuthService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
