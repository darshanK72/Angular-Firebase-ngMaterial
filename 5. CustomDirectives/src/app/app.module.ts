import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { HoverDirective } from './Directives/hover.directive';
import { YellowbgDirective } from './Directives/yellowbg.directive';
import { HostbindingDirective } from './Directives/hostbinding.directive';
import { BackgroundDirective } from './Directives/background.directive';
import { ColorDirective } from './Directives/color.directive';
import { ButtonDirective } from './Directives/button.directive';
import { DisabledDirective } from './Directives/disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HoverDirective,
    YellowbgDirective,
    HostbindingDirective,
    BackgroundDirective,
    ColorDirective,
    ButtonDirective,
    DisabledDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
