import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }

  _isLogin() {
    const _token = localStorage.getItem('_token');
    const _user_Data = localStorage.getItem('_user_data');
    return (_token && _user_Data) === null ? false : true;
  }

  _isLoggedIn() {
    return !!localStorage.getItem('_token');
  }

  _setItem(_user_data:any, _token: any) {
    localStorage.setItem('_user_data', _user_data)
    localStorage.setItem('_token', _token);
  }

  _getToken() {
    return localStorage.getItem('_token');
  }

  _logOut(){
    localStorage.clear();
    this._router.navigate(['']);
  }
}
