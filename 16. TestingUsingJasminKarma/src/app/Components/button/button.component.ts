import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  isDisabled = false;
  // btnText = 'Subscribe';
  ifSubscribed = false;

  subscribe(){

    setTimeout(() => {
      this.isDisabled = true;
      // this.btnText = 'Subscribed';
      this.ifSubscribed = true;

    }, 3000);
  }

}
