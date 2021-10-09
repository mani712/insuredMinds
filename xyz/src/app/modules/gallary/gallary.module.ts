import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallaryRoutingModule } from './gallary-routing.module';
import { GallaryComponent } from './component/gallary/gallary.component';


@NgModule({
  declarations: [GallaryComponent],
  imports: [
    CommonModule,
    GallaryRoutingModule
  ]
})
export class GallaryModule { }
