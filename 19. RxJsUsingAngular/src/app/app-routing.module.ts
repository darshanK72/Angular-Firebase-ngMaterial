import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './rxjs/async-await/async-await.component';
import { FromEventComponent } from './rxjs/from-event/from-event.component';
import { HomeComponent } from './home/home.component';
import { IntervalTimerComponent } from './rxjs/interval-timer/interval-timer.component';
import { MapComponent } from './rxjs/map/map.component';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { OfFromComponent } from './rxjs/of-from/of-from.component';
import { PromiseComponent } from './rxjs/promise/promise.component';
import { FilterComponent } from './rxjs/filter/filter.component';
import { SubjectComponent } from './rxjs/subject/subject.component';
import { ConcatComponent } from './rxjs/concat/concat.component';
import { MergeComponent } from './rxjs/merge/merge.component';
import { MergeMapComponent } from './rxjs/merge-map/merge-map.component';
import { ConcatMapComponent } from './rxjs/concat-map/concat-map.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'home', pathMatch : 'full'
  },
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'promise', component : PromiseComponent
  },
  {
    path : 'async-await', component : AsyncAwaitComponent
  },
  {
    path : 'from-event', component : FromEventComponent
  },
  {
    path : 'interval-timer', component : IntervalTimerComponent
  },
  {
    path : 'of-from', component : OfFromComponent
  },
  {
    path : 'observable', component : ObservableComponent
  },
  {
    path : 'map', component : MapComponent
  },
  {
    path : 'filter', component : FilterComponent
  },
  {
    path : 'subject', component : SubjectComponent
  },
  {
    path : 'concat', component : ConcatComponent
  },
  {
    path : 'merge', component : MergeComponent
  },
  {
    path : 'mergeMap', component : MergeMapComponent
  },
  {
    path : 'concatMap', component : ConcatMapComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
