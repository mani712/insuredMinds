import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './component/gallary/gallary.component';


const routes: Routes = [
  {path: "", component: GallaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallaryRoutingModule { }
