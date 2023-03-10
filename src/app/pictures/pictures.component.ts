import { Component, OnInit } from '@angular/core';
import { Picture } from './pictures.model';
import { PicturesService } from './pictures.service';

@Component({
  selector: 'pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public pictureData: Picture[] = [];
  public isMobile: boolean = false;

  constructor(private pictureSvc: PicturesService) { }

  ngOnInit(): void {
    if (window.screen.width <= 420) {
      this.isMobile = true;
    }

    this.pictureSvc.getPictures().subscribe(resp => {
      this.pictureData = [];
      resp.forEach(pic => {
        var newPic: Picture = new Picture();
        newPic.id = pic.Id;
        newPic.description = pic.Description;
        newPic.image = pic.Image;
        this.pictureData.push(newPic);
      })
    })
  }

  shouldBeDisplayed(idx: number, pos: number) {
    if (idx % 2 == 0) {
      if (pos == 0) {
        return true;
      }
    } else {
      if (pos == 1) {
        return true;
      }
    }

    return false;
  }
}
