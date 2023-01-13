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

  constructor(private pictureSvc: PicturesService) { }

  ngOnInit(): void {
    this.pictureSvc.getPictures().subscribe(resp => {
      this.pictureData = resp;
    })
  }
}
