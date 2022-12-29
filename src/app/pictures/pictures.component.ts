import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public pictureData = [{
    pictureUrl: "../../assets/userImages/screenshot.png",
    description: "Test description and a lot more text Test description and a lot more text Test description and a lot more text Test description and a lot more text "
  },
  {
    pictureUrl: "../../assets/userImages/screenshot.png",
    description: ""
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
