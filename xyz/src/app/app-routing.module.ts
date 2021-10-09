import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './modules/gallary/component/gallary/gallary.component';
import { HomepageComponent } from './modules/homepage/component/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full"

  },{
    path: "home",
    loadChildren: () => import('src/app/modules/homepage/homepage.module').then(m=>m.HomepageModule)
  },{
    path: "gallary",
    loadChildren: () => import('src/app/modules/gallary/gallary.module').then(m=>m.GallaryModule)
  },{
    path: "about",
    loadChildren: () => import('src/app/modules/aboutpage/aboutpage.module').then(m=>m.AboutpageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
