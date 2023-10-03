import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authService:AuthService = inject(AuthService);
  router:Router = inject(Router);


  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  email!: string;
  password!: string;

  login(){
    this.email = this.emailInput.nativeElement.value
    this.password = this.passwordInput.nativeElement.value;

    let user:User | undefined = this.authService.loginUser(this.email,this.password);

    if(user == undefined){
      alert("User Not Found, Please Enter Correct Credentials !!");
    }
    else{
      alert("You Are Logged In Successfully !!");
      this.router.navigate(['home']);
    }

  }

}
