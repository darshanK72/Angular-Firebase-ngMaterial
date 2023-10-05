import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    provideAnimations()
  ],
  animations: [
    trigger('openClose',[
      state('open',style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close',style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => close',[
        animate('1s')
      ]),
      transition('close => open',[
        animate('0.5s')
      ])
    ])
  ]
})
export class HomeComponent {

  isOpen:boolean = false;

  toggle(){
    this.isOpen = !this.isOpen;
  }
}
