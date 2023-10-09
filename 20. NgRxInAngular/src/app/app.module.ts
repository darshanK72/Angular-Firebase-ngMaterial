import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './Components/counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlogComponent } from './Components/blog/blog.component';
import { AppStore } from './Store/app.store';
import { EffectsModule } from '@ngrx/effects';
import { PostComponent } from './Components/post/post.component';
import { PostEffects } from './Store/post/post.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BlogComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(AppStore),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PostEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
