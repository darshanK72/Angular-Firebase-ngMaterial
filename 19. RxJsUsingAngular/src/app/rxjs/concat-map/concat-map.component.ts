import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, filter, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
  @ViewChild('list') list!: ElementRef;

  evenNums = interval(1000).pipe(filter(ele => ele%2 == 0),take(5),map(ele => of(ele)));

  constructor() {}

  ngOnInit() {
    let finalStream = this.evenNums.pipe(concatMap(data => data)).subscribe(data => {
      let li = document.createElement('li');
      li.textContent = `${data}`;
      this.list.nativeElement.appendChild(li);
    })
  }
}