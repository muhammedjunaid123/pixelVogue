import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  providers:[],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private _UserService:UserService){
 
}
 userLogin(){
this._UserService.LoginUser().subscribe((res)=>{
  console.log(res);
  
})
 }
}
