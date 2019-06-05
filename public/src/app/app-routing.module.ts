import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './student/login/login.component';
import { SignupComponent } from './student/signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentComponent } from './student/student.component';
import { StudentMainComponent } from './student/student-main/student-main.component';

import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { TeacherSignupComponent } from './teacher/teacher-signup/teacher-signup.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherMainComponent } from './teacher/teacher-main/teacher-main.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { AuthGuard } from 'src/shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'student', component: StudentComponent,
    children: [
      {
      path:'students', component: StudentMainComponent
    },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'sign-up', component: SignupComponent
      }
    ]
  },
  {
    path: 'teacher', component: TeacherComponent,
    children: [
      {
        path:'teachers', component: TeacherMainComponent
      },
      
      {
        path: 'login', component: TeacherLoginComponent
      },
      {
        path: 'sign-up', component: TeacherSignupComponent
      }
    ]
  },
  {
    path: 'teacher/:id', component: TeacherProfileComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: 'student/:id', component: StudentProfileComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: 'contact-us', component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
