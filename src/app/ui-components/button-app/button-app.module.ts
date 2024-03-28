import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-primary.component';
import { ButtonAccentComponent } from './button-accent.component';



@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonAccentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonPrimaryComponent,
    ButtonAccentComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ButtonAppModule { }
