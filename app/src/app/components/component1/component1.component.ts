import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component {
  constructor() {}

  public notify(): void {
    window._SC.addNotification({
      color: 'red',
      heading: 'Component 1',
      text: 'This is a message from the first component',
    });
  }
}
