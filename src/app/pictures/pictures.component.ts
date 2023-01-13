import { Component, OnInit } from '@angular/core';
import { Pictures } from './pictures.model';
import { PicturesService } from './pictures.service';

@Component({
  selector: 'pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public pictureData: Pictures[] = [];
  // public pictureData = [{
  //   pictureUrl: "../../assets/userImages/screenshot.png",
  //   description: "Test description and a lot more text Test description and a lot more text Test description and a lot more text Test description and a lot more text "
  // },
  // {
  //   pictureUrl: "../../assets/userImages/screenshot.png",
  //   description: ""
  // }]

  constructor(private pictureSvc: PicturesService) { }

  ngOnInit(): void {
    this.pictureSvc.getPictures().subscribe(resp => {
      this.pictureData = resp;
    })
  }

  getImageUrl(image: string): string{
    return 'data:image/jpg;base64, ' + image;
  }
}
