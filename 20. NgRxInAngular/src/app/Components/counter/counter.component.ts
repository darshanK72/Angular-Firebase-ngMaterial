import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/app/Models/counter';
import {
  custom,
  decrement,
  increment,
  reset,
} from 'src/app/Store/counter/counter.actions';
import { count } from 'src/app/Store/counter/counter.selectors';
import { AppState } from 'src/app/Store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$!:Observable<number>
  // number!: number;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(count);
  }
  ngOnInit(): void {
    // this.store.subscribe(data => {
    //   this.number = data.counter.count;
    // })
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  custom(inp:HTMLInputElement){
    this.store.dispatch(custom({value:parseInt(inp.value)}));
  }
}

