import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatTooltipModule} from '@angular/material/tooltip';

const Materials = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatMenuModule,
  MatDialogModule,
  MatProgressBarModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Materials],
  exports: [Materials],
})
export class MaterialModule {}
