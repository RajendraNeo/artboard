import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { CommonComponentModule } from 'src/app/common/common/common-component.module';


@NgModule({
  declarations: [
    AllAssetsComponent,
    TopStoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentModule
  ]
})
export class HomeModule { }
