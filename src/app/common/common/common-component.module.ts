import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-component.routing.module';
import { AssetsCardComponent } from '../assets-card/assets-card.component';



@NgModule({
  declarations: [
    AssetsCardComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule
  ],
  exports:[
    AssetsCardComponent
  ]
})
export class CommonComponentModule { }
