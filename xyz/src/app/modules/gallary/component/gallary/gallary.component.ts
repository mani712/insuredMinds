import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GallaryService } from '../../service/gallary.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  array: Observable<string[]>;  
  sum = 10;  
  throttle = 300;  
  scrollDistance = 1;  
  scrollUpDistance = 2;  
  direction = "";  
  modalOpen = false;  
  photos: any;  
  start: number = 0;  
  
  constructor(private gallaryService: GallaryService) {  
  }

  ngOnInit(): void {
    this.array = this.gallaryService.getPhoto(this.start, this.sum);
  }

  onScrollDown() {
    if(this.sum + 10 > this.gallaryService.photos.length) {
      console.log(this.sum);
      return;
    }
    this.start = this.sum;
    this.sum +=5;
    this.gallaryService.getPhoto(this.start, this.sum);  
    this.direction = "down";    
  }

}
