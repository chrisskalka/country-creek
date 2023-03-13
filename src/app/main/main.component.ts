import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  activeTab: string = '';
  isSticky: boolean = false;
  links = ['Home', 'Indentures', 'FAQ', 'Contacts', 'Pictures'];
  activeLink = this.links[0];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 400;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
