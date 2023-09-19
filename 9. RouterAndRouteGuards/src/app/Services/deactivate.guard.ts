import { CanDeactivateFn } from '@angular/router';

export interface ICanDeactivateComponent{
  canExit():boolean;
}

export const deactivateGuard: CanDeactivateFn<any> = (component:ICanDeactivateComponent, currentRoute, currentState, nextState) => {
  return component.canExit();
};
