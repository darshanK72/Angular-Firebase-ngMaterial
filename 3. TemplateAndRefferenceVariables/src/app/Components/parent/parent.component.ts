import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ViewChild('lastName')
  inputElement!:ElementRef;

  firstName!:string;
  lastName!:string;
  
  onSubmitFN(element:HTMLInputElement){
    console.log(element);
    this.firstName = element.value;
    console.log(this.firstName);
  }

  
  onSubmitLN(){
    this.lastName = this.inputElement.nativeElement.value;
    console.log(this.inputElement);
    console.log(this.lastName)
  }

  onChildSubmit(child:ChildComponent){
    console.log(child);
  } 

  

}
