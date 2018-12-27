import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title1;
  public title2;
  public title3;
  public title4;
  public icon1;
  public icon2;
  public icon3;
  public icon4;
  public open1;
  public open2;
  public open3;
  public open4;
  public close1;
  public close2;
  public close3;
  public close4;
  public openFirst1;
  public toggle1;
  public openFirst2;
  public toggle2;
  public description1;
  public description2;

  ngOnInit() {
    this.title1 = 'Dashboard';
    this.title2 = 'Calendar';
    this.title3 = 'Folder';
    this.title4 = 'Shopping Cart';
    this.description1 = 'Click on + to expand, - to collapse';
    this.description2 = 'Click on + to expand current, collapse other';
    this.icon1 = 'fas fa-book';
    this.icon2 = 'fas fa-calendar';
    this.icon3 = 'fas fa-folder';
    this.icon4 = 'fas fa-shopping-cart';
    this.open1 = 'fas fa-plus';
    this.open2 = 'fas fa-calendar-plus';
    this.open4 = 'fas fa-plus-circle';
    this.open3 = 'fas fa-folder-plus';
    this.close1 = 'fas fa-minus';
    this.close2 = 'fas fa-calendar-minus';
    this.close4 = 'fas fa-minus-circle';
    this.close3 = 'fas fa-folder-minus';
    this.openFirst1 = false;
    this.toggle1 = false;
    this.openFirst2 = true;
    this.toggle2 = true;
  }
}
