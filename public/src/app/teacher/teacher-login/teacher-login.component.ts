import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/shared/services/teacher.service';
import { AuthService } from 'src/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  _email: any;
  _password: any;


  constructor(private _teacherService: TeacherService, private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login(){
    let loginData = {
      _email: this._email,
      _password: this._password
    }
    console.log('Login Data', loginData);


    this._teacherService.loginTeacher(loginData)
    .subscribe((res)=>{
      if(res.hasOwnProperty('teacher')){
        this._authService._setItem(res['teacher'], res['token']);
        this._router.navigate(['teacher', res['teacher']['_id']]);
      }
    }, (err)=>{
      console.log('Error while logging In', err);
    })
  }
}
