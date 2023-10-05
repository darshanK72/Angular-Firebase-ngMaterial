import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('onoff', [
      state(
        'on',
        style({
          backgorundColor: 'white',
        })
      ),
      state(
        'off',
        style({
          backgroundColor: 'black',
        })
      ),
      transition('off => on', [animate('1s')]),
      transition('on => off', [animate('1s')]),
    ]),
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true,
        }),
        group([
          query(
            ':enter',
            [
              style({ transform: 'translateX(100%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(0%)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              style({ transform: 'translateX(0%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(100%)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'AngularAnimations';

  value = 'off';

  onClick() {
    if (this.value == 'on') {
      this.value = 'off';
    } else {
      this.value = 'on';
    }
  }
}
