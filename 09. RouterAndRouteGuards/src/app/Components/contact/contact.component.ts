import { Component } from '@angular/core';
import { ICanDeactivateComponent } from 'src/app/Services/deactivate.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements ICanDeactivateComponent{

  email:string = '';
  message:string = '';

  isSubmited:boolean = false;

  submit(){

    if(this.email != '' && this.message != ''){
      this.isSubmited = true;
    }
    else{
      alert("Please Fill The Form !!");
    }
  }

  canExit(){
    if(this.email == '' && this.message == ''){
      return true;
    }
    else if(this.isSubmited){
      return true;  
    }
    else{
      return confirm("You Have Some Unsaved Changes, Do you want to exit ?");
    }
  }
}
