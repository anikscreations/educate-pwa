import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  BASE_URL = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

  mainService(){
    return this._http.get(this.BASE_URL);
  }
}
