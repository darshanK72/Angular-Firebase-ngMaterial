import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit{

  @Input()
  content!:string;

  @ViewChild('message')
  message!:string;

  @ContentChild("otherMessage")
  otherMessage!:string;

  
  constructor(){
    console.log("Main Component Constructor Called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Main Component onChanges Called");
    console.log(this.content);
    console.log(this.otherMessage);
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("Main Component ngOnInit Called");
    console.log(this.content);
    console.log(this.otherMessage);
  }

  ngDoCheck(): void {
    console.log("Main Component DoCheck Called");
    console.log(this.content);
    console.log(this.otherMessage);
  }

  ngAfterContentInit(): void {
    console.log("Main Component ngAfterContentInit Called");
    console.log(this.content);
    console.log(this.otherMessage);
  }

  ngAfterContentChecked(): void {
    console.log("Main Component ngAfterContentChecked Called");
    console.log(this.content);
    console.log(this.message);
    console.log(this.otherMessage);
  }

  ngAfterViewInit(): void {
    console.log("Main Component ngAfterViewInit Called");
    console.log(this.message);
  }
}
