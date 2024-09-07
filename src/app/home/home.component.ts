import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HomeService} from "./home.service";
import * as THREE from 'three';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  public age: number = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.age = this.homeService.getAge();
  }
}
