import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule,
  MatListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatSnackBarModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule,
  MatSnackBarModule
];

@NgModule({
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS,
})
export class MaterialModule { }
