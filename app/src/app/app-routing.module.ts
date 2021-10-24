import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

const routes: Routes = [
  { path: '', redirectTo: '/c1', pathMatch: 'full' },
  { path: 'c1', component: Component1Component },
  { path: 'c2', component: Component2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
