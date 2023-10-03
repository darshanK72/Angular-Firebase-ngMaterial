import { Component } from '@angular/core';
import { AlertService } from 'src/app/Services/alert.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent {

  type:string = "Warning";
  message!:string;

  constructor(private alertService:AlertService){}

  show()
  {
    this.alertService.showAlert(this.type,this.message);
  }
}
