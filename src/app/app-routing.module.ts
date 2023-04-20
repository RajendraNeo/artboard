import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren: () => import("./module/home/home.module").then(m => m.HomeModule)},
  {path:"dashboard", loadChildren: () => import("./module/dashbaord/dashbaord.module").then(m => m.DashbaordModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
