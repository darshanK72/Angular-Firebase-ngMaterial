import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, interval, map, mergeMap, of, take } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {
  @ViewChild('list') list!: ElementRef;

  evenNums = interval(1000).pipe(filter(ele => ele%2 == 0),take(5),map(ele => of(ele)));

  constructor() {}

  ngOnInit() {
    let finalStream = this.evenNums.pipe(mergeMap(data => data)).subscribe(data => {
      let li = document.createElement('li');
      li.textContent = `${data}`;
      this.list.nativeElement.appendChild(li);
    })
  }
}
