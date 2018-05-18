import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form1Step2Component } from './form1-step2/form1-step2.component';
import { routing } from './app.routing';
import {FormsModule, ReactiveFormsModule , Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form1Step2Component
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
