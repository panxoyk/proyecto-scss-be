import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './success.component';
import { ButtonAppModule } from 'src/app/ui-components/button-app/button-app.module';


@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    SuccessRoutingModule,
    ButtonAppModule
  ]
})
export class SuccessModule { }
