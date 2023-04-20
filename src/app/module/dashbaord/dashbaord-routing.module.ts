import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceComponent } from './performance/performance.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"",component:PortfolioComponent},
  {path:"dashboard/performance",component:PerformanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbaordRoutingModule { }
