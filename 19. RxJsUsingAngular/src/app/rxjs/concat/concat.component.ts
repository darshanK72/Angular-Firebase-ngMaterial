import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, filter, interval, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent implements OnInit {
  @ViewChild('list') list!: ElementRef;

  evenNums = interval(1000).pipe(filter(ele => ele%2 == 0),take(5));
  oddNums = interval(500).pipe(filter(ele => ele%2 == 1),take(5));

  constructor() {}

  ngOnInit() {
    let finalStream = concat(this.evenNums,this.oddNums);
    finalStream.subscribe(data => {
      let li = document.createElement('li');
      li.textContent = `${data}`;
      this.list.nativeElement.appendChild(li);
    })
  }
}
