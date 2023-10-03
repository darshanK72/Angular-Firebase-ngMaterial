import { Component } from '@angular/core';
import { AlertService } from 'src/app/Services/alert.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  type:string = "Info";
  message!:string;

  constructor(private alertService:AlertService){}

  show()
  {
    this.alertService.showAlert(this.type,this.message);
  }
}
