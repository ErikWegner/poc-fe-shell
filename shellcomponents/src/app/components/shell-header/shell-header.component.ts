import { Component, OnInit } from '@angular/core';
import { addListener, Notification } from 'notifylib';

@Component({
  selector: 'app-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent implements OnInit {

  public notification: Notification | null = null;
  public counter = 0;

  constructor() { }

  ngOnInit(): void {
    addListener((n) => {
      this.notification = n;
      this.counter++;
    });
  }

}
