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
import { AutocompleteComponent } from './Components/Pages/autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from './Components/Pages/badge/badge.component';
import { MenuComponent } from './Components/Pages/menu/menu.component';
import { DialogComponent } from './Components/Pages/dialog/dialog.component';
import { Dialog1Component } from './Components/Pages/dialog/dialog1/dialog1.component';
import { CardComponent } from './Components/Pages/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ButtonsComponent,
    ToggleComponent,
    AutocompleteComponent,
    BadgeComponent,
    MenuComponent,
    DialogComponent,
    Dialog1Component,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
