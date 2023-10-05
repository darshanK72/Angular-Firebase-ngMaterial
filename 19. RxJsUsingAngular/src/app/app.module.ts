import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './rxjs/promise/promise.component';
import { HomeComponent } from './home/home.component';
import { AsyncAwaitComponent } from './rxjs/async-await/async-await.component';
import { FromEventComponent } from './rxjs/from-event/from-event.component';
import { IntervalTimerComponent } from './rxjs/interval-timer/interval-timer.component';
import { OfFromComponent } from './rxjs/of-from/of-from.component';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { MapComponent } from './rxjs/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterComponent } from './rxjs/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    HomeComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    IntervalTimerComponent,
    OfFromComponent,
    ObservableComponent,
    MapComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
