import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  BASE_URL = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

  loginTeacher(teacherData){
    return this._http.post(this.BASE_URL + 'auth/teacher/login', teacherData);
  }

  registerTeacher(teacherData){
    return this._http.post(this.BASE_URL + 'teachers/sign-up', teacherData);
  }

  getTeacher(teacherId){
    return this._http.get(this.BASE_URL + `teachers/${teacherId}`);
  }
}
