import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { first, toArray } from 'rxjs';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ViewChild('lastName')
  inputElement!:ElementRef;

  @ViewChildren('showMessage')
  messageEmelents!:QueryList<ElementRef>;

  firstName!:string;
  lastName!:string;
  middleName!:string;
  
  onSubmitFN(element:HTMLInputElement){
    this.firstName = element.value;
  }

  onSubmitMN(element:HTMLInputElement){
    this.middleName = element.value;
  }
  
  onSubmitLN(){
    this.lastName = this.inputElement.nativeElement.value;
  }

  onChildSubmit(child:ChildComponent){
    console.log(child);
  } 

  onAllSubmit(){
    let details:string[] = [];

    details.push(this.firstName);
    details.push(this.middleName);
    details.push(this.lastName);
    
    let i = 0;
    this.messageEmelents.forEach(ele => {
      ele.nativeElement.innerText = details[i];
      i++;
    })
  }

  

}
