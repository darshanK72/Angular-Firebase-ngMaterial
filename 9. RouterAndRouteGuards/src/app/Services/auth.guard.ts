import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  let authService:AuthService = inject(AuthService);
  let router:Router = inject(Router);

  if(authService.isLoggedIn){
    return true;
  }else{
    router.navigate(["login"]);
    return false;
  }
};
