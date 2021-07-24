import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PubHomeComponent } from './pub_home/pub-home/pub-home.component';
import { PubBodyComponent } from './pub_home/pub-body/pub-body.component';

@NgModule({
  declarations: [
    AppComponent,
    PubHomeComponent,
    routingComponent,
    PubBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
