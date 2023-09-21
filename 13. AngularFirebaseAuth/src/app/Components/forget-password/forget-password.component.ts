import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  email!:string;

  constructor(private authServie:AuthService){}

  forgetPassword(forgetForm:NgForm){
    this.email = forgetForm.value.email;

    this.authServie.forgetPassword(this.email);
  }

}
