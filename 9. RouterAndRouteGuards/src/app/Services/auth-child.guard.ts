import { CanActivateChildFn } from '@angular/router';
import { authGuard } from './auth.guard';

export const authChildGuard: CanActivateChildFn = (route, state) => {
  return authGuard(route,state);
};
