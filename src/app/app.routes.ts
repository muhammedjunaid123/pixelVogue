import { Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { OtpComponent } from './components/user/otp/otp.component';
import { HomeComponent } from './components/user/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'otp', component: OtpComponent },
    { path: 'home', component: HomeComponent }
];
