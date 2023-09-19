import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { PercentagePipe } from './Pipes/percentage.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './Components/confirm-delete/confirm-delete.component';
import { ContainerDirective } from './Directives/container.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PercentagePipe,
    FilterPipe,
    ConfirmDeleteComponent,
    ContainerDirective
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
