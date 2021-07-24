import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubHomeComponent } from './pub_home/pub-home/pub-home.component';

const routes: Routes = [
  {path:"pub",component:PubHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  PubHomeComponent,
]

