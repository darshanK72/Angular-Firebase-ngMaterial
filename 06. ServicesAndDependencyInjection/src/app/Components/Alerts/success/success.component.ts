import { Component } from '@angular/core';
import { AlertService } from 'src/app/Services/alert.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  type:string = "Success";
  message!:string;

  constructor(private alertService:AlertService){}

  show()
  {
    this.alertService.showAlert(this.type,this.message);
  }
}
