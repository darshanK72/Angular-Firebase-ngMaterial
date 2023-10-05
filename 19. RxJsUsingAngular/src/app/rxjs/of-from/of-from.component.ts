import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements AfterViewInit{

  @ViewChild('list1') list1!:ElementRef;
  @ViewChild('list2') list2!:ElementRef;

  ngAfterViewInit(){
    let ofList = of("apple","banana","pineabble");
    ofList.subscribe(data => {
      let li = document.createElement('li');
      li.textContent = `${data}`;
      this.list1.nativeElement.appendChild(li);
    });

    let fromList = from([1,2,3,4,5,6,7,8,9,10]);
    fromList.subscribe(data => {
      let li = document.createElement('li');
      li.textContent = `${data}`;
      this.list2.nativeElement.appendChild(li);
    })
  }

}
