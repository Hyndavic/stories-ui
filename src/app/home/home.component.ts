import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isMenu = false;

  constructor(private dataService: DataService) {
  }

  onMenuClick(){
    this.isMenu = !this.isMenu;
    this.dataService.menuClick.next(this.isMenu);
  }



}
