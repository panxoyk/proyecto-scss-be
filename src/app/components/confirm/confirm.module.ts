import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRoutingModule } from './confirm-routing.module';
import { ConfirmComponent } from './confirm.component';
import { ButtonAppModule } from 'src/app/ui-components/button-app/button-app.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    ConfirmRoutingModule,
    ButtonAppModule,
    ReactiveFormsModule
  ]
})
export class ConfirmModule { }
