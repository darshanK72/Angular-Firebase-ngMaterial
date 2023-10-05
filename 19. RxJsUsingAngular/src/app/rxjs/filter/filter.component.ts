import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @ViewChild('list') list!: ElementRef;

  posts!:Post[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe((data:any) => {
    from(data).pipe(filter((p:any)=> p.userId % 2 == 0)).subscribe(data => {
      let li = document.createElement('li');
      li.textContent = `${JSON.stringify(data)}`;
      this.list.nativeElement.appendChild(li);
    })
    
   });


    let ob = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    console.log(ob);

    ob.pipe(filter((n) => n % 2 == 0)).subscribe((data) => {
      console.log(data);
    });
  }
}
