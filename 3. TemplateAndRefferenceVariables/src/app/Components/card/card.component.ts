import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @ContentChild("content")
  contentElement!:ElementRef;

  ngOnInit(): void{
   
  }

  showContent(){
    console.log(this.contentElement.nativeElement.innerText);
    console.log(this.contentElement.nativeElement)
  }


}
