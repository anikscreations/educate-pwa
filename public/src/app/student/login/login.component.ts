import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/shared/services/student.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  _email: any;
  _password: any;


  constructor(private _studentService: StudentService, private _router: Router, private _authService : AuthService) { }

  ngOnInit() {
  }

  login(){
    let loginData = {
      _email: this._email,
      _password: this._password
    }
    console.log('Login Data', loginData);

    this._studentService.loginStudent(loginData)
    .subscribe((res)=>{
      if(res.hasOwnProperty('student')){
        this._authService._setItem(res['student'], res['token']);
        this._router.navigate(['student', res['student']['_id']]);
      }
    }, (err)=>{
      console.log('Error while logging In', err);
    })
  }

}
