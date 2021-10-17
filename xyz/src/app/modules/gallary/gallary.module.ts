import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallaryRoutingModule } from './gallary-routing.module';
import { GallaryComponent } from './component/gallary/gallary.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [GallaryComponent],
  imports: [
    CommonModule,
    GallaryRoutingModule,
    InfiniteScrollModule
  ]
})
export class GallaryModule { }
