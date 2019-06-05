import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/shared/services/teacher.service';
import { AuthService } from 'src/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.scss']
})
export class TeacherSignupComponent implements OnInit {

  constructor(private _teacherService: TeacherService, private _authService: AuthService, private _router: Router) { }

  _first_name: any;
  _last_name: any;
  _email: any;
  _password: any;

  ngOnInit() {
  }

  signUp(){
    let signUpData = {
      _first_name: this._first_name,
      _email: this._email,
      _last_name: this._last_name,
      _full_name: this._first_name + this._last_name,
      _password: this._password
    };
    console.log('Signup Data', signUpData);
    this._teacherService.registerTeacher(signUpData)
    .subscribe((res)=>{
      if(res.hasOwnProperty('teacher')){
        this._authService._setItem(res['teacher'], res['token']);
        this._router.navigate(['teacher', res['teacher']['_id']]);
      }
    }, (err)=>{
      console.log('Error while signing In', err);
    })
  }
}
