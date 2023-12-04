import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'picture-page',
  templateUrl: './picturePage.component.html',
  styleUrls: ['./picturePage.component.scss']
})
export class PicturePageComponent implements OnInit {
  contactInfo: string = '';

  constructor(private pictureSvc: ImageService) {

  }

  ngOnInit(): void {
    this.pictureSvc.getPictures().subscribe(response => {
      this.contactInfo = response;
    })
  }

}
