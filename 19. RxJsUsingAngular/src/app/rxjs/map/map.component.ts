import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, map, toArray } from 'rxjs';
import { Post } from '../../Models/post'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @ViewChild('list') list!: ElementRef;

  source = from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 },
  ]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts/')
      .pipe(
        map((request) => {
          let posts: any[] = [];
          let i = 100;
          request.forEach((data) => {
            posts.push({ ...data, newId: ++i });
          });

          return (posts);
        })
      )
      .subscribe((data) => {
        let li = document.createElement('li');
        li.innerText = `${JSON.stringify(data)}`;
        this.list.nativeElement.appendChild(li);
      });

    this.source.subscribe((data) => console.log(data));

    this.source.pipe(toArray(),map((data) => data)).subscribe((data) => {
      console.log(data);
    });
  }
}
