import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Components/parent/parent.component';
import { WarningComponent } from './Components/Alerts/warning/warning.component';
import { InfoComponent } from './Components/Alerts/info/info.component';
import { SuccessComponent } from './Components/Alerts/success/success.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './Components/Alerts/error/error.component';
import { MessageInputComponent } from './Components/message-input/message-input.component';
import { MessageShowComponent } from './Components/message-show/message-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    WarningComponent,
    InfoComponent,
    SuccessComponent,
    ErrorComponent,
    MessageInputComponent,
    MessageShowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
