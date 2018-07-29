import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule, MatTabsModule,
  MatListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatSnackBarModule, MatTableModule,
  MatProgressSpinnerModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatTabsModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
];

@NgModule({
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS,
})
export class MaterialModule { }
