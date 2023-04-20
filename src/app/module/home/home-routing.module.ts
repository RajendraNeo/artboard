import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

const routes: Routes = [
  {path:"", component:AllAssetsComponent},
  {path:"top-stories", component:TopStoriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
