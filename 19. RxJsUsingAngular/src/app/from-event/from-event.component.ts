import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit{

  @ViewChild('btn') btn!:ElementRef;
  @ViewChild('list') list!:ElementRef;

  ngAfterViewInit(){
    let i = 1;
    fromEvent(this.btn.nativeElement,'click').subscribe(() => {
      this.appendList(i++);
    })
  }

  appendList(i : number){
    let li = document.createElement('li');
    li.textContent = `Video No : ${i}`;
    this.list.nativeElement.appendChild(li);
  }


}
