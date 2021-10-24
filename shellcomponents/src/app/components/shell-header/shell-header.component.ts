import { Component, NgZone, OnInit } from '@angular/core';
import { Notification } from 'notifylib';

@Component({
  selector: 'app-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss'],
})
export class ShellHeaderComponent implements OnInit {
  public notification: Notification | null = null;
  public counter = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    window._SC.addListener((n: Notification) => {
      this.ngZone.run(() => {
        this.notification = n;
        this.counter++;
      });
    });
  }
}
