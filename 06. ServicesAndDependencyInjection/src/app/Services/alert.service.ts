import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlert(type:string,message:string){
    window.alert(type + " : " + message)
  }
}
