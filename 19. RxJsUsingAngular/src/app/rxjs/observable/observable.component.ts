import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{

 @ViewChild('list') list!:ElementRef;

  ngOnInit(): void {
    let obs = new Observable<string>((observer) => {
      setTimeout(() => {
        observer.next("Output : 1");
      }, 1000);
      setTimeout(() => {
        observer.next("Output : 2");
        observer.complete();
      }, 2000);
      setTimeout(() => {
        observer.next("Output : 3");
        // observer.error('some error happende');
      }, 3000);
    });

    obs.subscribe((data) => {
        let li = document.createElement('li');
        li.textContent = `${data}`;
        this.list.nativeElement.appendChild(li);
    },(error) => {
      console.log(error);
    },() => {
      console.log("completed");
    })
  }

}
