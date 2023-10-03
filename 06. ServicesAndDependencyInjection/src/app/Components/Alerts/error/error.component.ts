import { Component } from '@angular/core';
import { AlertService } from 'src/app/Services/alert.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  type:string = "Error";
  message!:string;

  constructor(private alertService:AlertService){}

  show()
  {
    this.alertService.showAlert(this.type,this.message);
  }
}
