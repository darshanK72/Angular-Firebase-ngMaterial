import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!:string;
  password!:string;

  constructor(private authService:AuthService){}

  loginUser(loginForm:NgForm){
    console.log(loginForm.value);

    this.email = loginForm.value.email;
    this.password = loginForm.value.password;

    this.authService.login(this.email,this.password);
  }

  loginWithGoogle(){
    this.authService.googleSignIn()
  }
}
