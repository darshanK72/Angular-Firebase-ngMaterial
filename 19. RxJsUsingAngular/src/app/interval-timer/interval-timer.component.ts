import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements AfterViewInit{

  @ViewChild('intervalList') intervalList!:ElementRef;
  @ViewChild('timerList') timerList!:ElementRef;

  ngAfterViewInit(){
    let int = interval(1000);
    let tim = timer(3000,1000);
    let i = 1;
    let t = 1;

    let uninterval = int.subscribe(() => {
      let li = document.createElement('li');
      li.textContent = `interval : ${i++};`;
      this.intervalList.nativeElement.appendChild(li);

      if(i > 5){
        uninterval.unsubscribe();
      }
    });

    let untimer = tim.subscribe(() => {
      let li = document.createElement('li');
      li.textContent = `interval : ${t++};`;
      this.timerList.nativeElement.appendChild(li);

      if(t > 5){
        untimer.unsubscribe();
      }
    })
  }

}
