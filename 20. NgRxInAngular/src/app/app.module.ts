import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './Components/counter/counter.component';
import { counterReducer } from './Store/counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlogComponent } from './Components/blog/blog.component';
import { blogReducer } from './Store/blog/blog.reducer';
import { AppStore } from './Store/app.store';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppStore),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
