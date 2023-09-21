
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email!:string;
  password!:string;

  constructor(private authService:AuthService){}

  registerUser(registerForm:NgForm){

    console.log(registerForm.value);

    this.email = registerForm.value.email;
    this.password = registerForm.value.password;

    this.authService.register(this.email,this.password);
  }

  loginWithGoogle(){
    this.authService.googleSignIn()
  }
}
