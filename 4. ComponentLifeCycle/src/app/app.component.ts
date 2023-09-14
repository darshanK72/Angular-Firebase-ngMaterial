import { AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'ComponentLifeCycle';

  @ViewChild("inputValue")
  inputValue!:ElementRef;

  value!:string;

  constructor(){
    console.log("App Component Constructor Called");
  }

  onSubmit(){
    this.value = this.inputValue.nativeElement.value;
  }


}
