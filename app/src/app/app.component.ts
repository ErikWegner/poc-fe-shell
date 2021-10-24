import { Component } from '@angular/core';
import 'notifylib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public notify(): void {
    window._SC.addNotification({
      color: 'red',
      heading: 'The inner component',
      text: 'This is a message from the inner component',
    });
  }
}
