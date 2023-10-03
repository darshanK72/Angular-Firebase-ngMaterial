import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  authService:AuthService = inject(AuthService);
  router:Router = inject(Router);

  logout(){
    let resp = confirm("Do you really want to logout ?");
    if(resp){
      this.authService.logout();
      this.router.navigate(["login"]);
    }
  }
}
