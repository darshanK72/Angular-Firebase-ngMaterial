import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { MaterialModule } from './MatModule/material.module';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { HomeComponent } from './Components/Layout/home/home.component';
import { ButtonsComponent } from './Components/Pages/buttons/buttons.component';
import { ToggleComponent } from './Components/Pages/toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ButtonsComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
