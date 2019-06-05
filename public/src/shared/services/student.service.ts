import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

  loginStudent(studentData){
    return this._http.post(this.BASE_URL + 'auth/student/login', studentData);
  }

  registerStudent(studentData){
    return this._http.post(this.BASE_URL + 'students/sign-up', studentData);
  }

  getStudent(studentId){
    return this._http.get(this.BASE_URL + `students/${studentId}`);
  }
}
