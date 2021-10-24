import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component {
  constructor() {}

  public notify(): void {
    window._SC.addNotification({
      color: '#080',
      heading: 'Component 2',
      text: 'This is a message from the second component',
    });
  }
}
