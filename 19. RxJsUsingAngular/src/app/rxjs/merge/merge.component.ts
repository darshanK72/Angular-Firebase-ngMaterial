import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, interval, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent  implements OnInit {
  @ViewChild('list') list!: ElementRef;

  evenNums = interval(1000).pipe(filter(ele => ele%2 == 0),take(5));
  oddNums = interval(500).pipe(filter(ele => ele%2 == 1),take(5));

  constructor() {}

  ngOnInit() {
    let finalStream = merge(this.evenNums,this.oddNums);
    finalStream.subscribe(data => {
      let li = document.createElement('li');
      li.textContent = `${data}`;
      this.list.nativeElement.appendChild(li);
    })
  }

}
