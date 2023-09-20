import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveRegisterComponent } from './Components/reactive-register/reactive-register.component';
import { TemplateRegisterComponent } from './Components/template-register/template-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveRegisterComponent,
    TemplateRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
