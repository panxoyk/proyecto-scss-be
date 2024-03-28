import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { ButtonAppModule } from 'src/app/ui-components/button-app/button-app.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ButtonAppModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
