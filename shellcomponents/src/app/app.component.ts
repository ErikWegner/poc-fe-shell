import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ShellFooterComponent } from './components/shell-footer/shell-footer.component';
import { ShellHeaderComponent } from './components/shell-header/shell-header.component';
import { ShellNavigationComponent } from './components/shell-navigation/shell-navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(injector: Injector) {
    const shellHeaderElement = createCustomElement(ShellHeaderComponent, { injector });
    customElements.define('shell-header', shellHeaderElement);
    const shellNavigationElement = createCustomElement(ShellNavigationComponent, { injector });
    customElements.define('shell-navigation', shellNavigationElement);
    const shellFooterElement = createCustomElement(ShellFooterComponent, { injector });
    customElements.define('shell-footer', shellFooterElement);
  }
}
