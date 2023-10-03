import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false;

  userList:User[] = [
    new User(0,"darshan@gmail.com","darshan123"),
    new User(1, "john_doe@example.com", "password123"),
    new User(2, "jane_doe@example.com", "securepassword"),
    new User(3, "bob_smith@example.com", "letmein"),
    new User(4, "susan_jones@example.com", "myp@ssw0rd"),
    new User(5, "mike_brown@example.com", "123456")
  ]

  constructor() { }

  loginUser(email:string,password:string){
    let loggedInUser = this.userList.find(u => u.email == email && u.password == password);

    if(loggedInUser != undefined){
      this.isLoggedIn = true;
    }

    return loggedInUser;
  }

  logout(){
    this.isLoggedIn = false;
  }
}
