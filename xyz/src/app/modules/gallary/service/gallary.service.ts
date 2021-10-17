import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { picArray } from 'src/app/app.constants';
@Injectable({
  providedIn: 'root'
})
export class GallaryService {

  constructor() { }

  array: string[] = [];
  photos: string[] = picArray;
  urls: string[] = [];

  getPhoto(index, sum ) {
    let pics = this.addItem(index , sum);
    return of(pics);
    
  }

  private addItem(index, sum) {
    for (let i = index; i < sum; ++i) {  
      this.array.push(this.photos[i]);
      this.urls.push("assets/gallary/" + this.photos[i]);     
    }
        
    return this.urls;
  }
} 
