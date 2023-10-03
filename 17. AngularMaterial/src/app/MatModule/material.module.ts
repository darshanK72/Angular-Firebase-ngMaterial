import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle'

const Materials = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Materials],
  exports: [Materials],
})
export class MaterialModule {}
