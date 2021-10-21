import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellHeaderComponent } from './components/shell-header/shell-header.component';
import { ShellNavigationComponent } from './components/shell-navigation/shell-navigation.component';
import { ShellFooterComponent } from './components/shell-footer/shell-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellHeaderComponent,
    ShellNavigationComponent,
    ShellFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
