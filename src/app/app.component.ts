import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ngIf
  isApproved = true;

  approve(status) {
    this.isApproved = status;
  }

  //ngFor
  numbers = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
  ];

  // ngSwitch
  luckyNumber = 0;

  
}
