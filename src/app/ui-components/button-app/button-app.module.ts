import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAppComponent } from './button-app.component';



@NgModule({
  declarations: [
    ButtonAppComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonAppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ButtonAppModule { }
