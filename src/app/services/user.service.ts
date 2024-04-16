import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getImage():Observable<any>{
   return this._http.get('')
  }
  LoginUser(){
    console.log('called');
    
    return this._http.post('localhost:8080/user/login',{"email":"sample@gmail.com","password":"123456"})
  }
}
