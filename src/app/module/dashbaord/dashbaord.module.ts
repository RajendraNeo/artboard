import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbaordRoutingModule } from './dashbaord-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PerformanceComponent } from './performance/performance.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    PerformanceComponent
  ],
  imports: [
    CommonModule,
    DashbaordRoutingModule
  ]
})
export class DashbaordModule { }
