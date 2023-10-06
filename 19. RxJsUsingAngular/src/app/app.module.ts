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
import { SubjectComponent } from './rxjs/subject/subject.component';
import { ConcatComponent } from './rxjs/concat/concat.component';
import { MergeComponent } from './rxjs/merge/merge.component';
import { MergeMapComponent } from './rxjs/merge-map/merge-map.component';
import { ConcatMapComponent } from './rxjs/concat-map/concat-map.component';

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
    FilterComponent,
    SubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent
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
