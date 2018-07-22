import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']


})

export class SlideshowComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = '';

  }

  ngOnInit() {
    console.log('slideshow.component cargado!!');
  }

}