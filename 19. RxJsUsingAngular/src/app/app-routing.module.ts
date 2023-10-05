import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './from-event/from-event.component';
import { HomeComponent } from './home/home.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'promise', pathMatch : 'full'
  },
  {
    path : 'promise', component : PromiseComponent
  },
  {
    path : 'home', component : HomeComponent
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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
