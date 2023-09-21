import { inject, Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import {GoogleAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fireAuth = inject(AngularFireAuth);

  constructor(private router:Router) { }

  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then((data)=>{
      localStorage.setItem("token",JSON.stringify(data));

      if(data.user?.emailVerified){
        this.router.navigate(['dashboard']);
      }
      else{
        alert("Your email verification is pending, check your email !!");
      }
    },err => {
      alert("Something went wrong !!");
     alert(err.message);
      this.router.navigate(['login']);
    })
  }

  register(email:string,password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then((res) => {
      alert("registeration successfull !!");

      res.user?.sendEmailVerification().then(()=>{
        alert("Email verification link is send to your email");
      },err => {
        alert(err.message);
      })

      this.router.navigate(['login']);
    },err =>{
      alert(err.message);
      this.router.navigate(['register']);
    })
  }

  googleSignIn(){
    this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {
      alert("registeration successfull !!");
      localStorage.setItem("token",JSON.stringify(res));
      this.router.navigate(["dashboard"]);
    },err => {
      alert(err.message);
      this.router.navigate(["login"]);
    })
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem("token");
      this.router.navigate(['login']);
    },err => {
      console.log(err.message);
      this.router.navigate(['dashboard']);
    })
  }

  forgetPassword(email:string){
    this.fireAuth.sendPasswordResetEmail(email).then(()=>{
      alert("Password reset link is send to your email !!");
      this.router.navigate(["login"]);
    },err => {
      alert(err.message);
      this.router.navigate(["forget"]);
    })
  }
}
