import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/shared/services/student.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _studentService: StudentService, private _router: Router, private _authService : AuthService) { }

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
    this._studentService.registerStudent(signUpData)
    .subscribe((res)=>{
      if(res.hasOwnProperty('student')){
        this._authService._setItem(res['student'], res['token']);
        this._router.navigate(['student', res['student']['_id']]);
      }
    }, (err)=>{
      console.log('Error while signing In', err);
    })
  }

}
