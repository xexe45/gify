import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input() url: string = '';
  @Input() title: string = '';
  public hasLoaded: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onLoad(){
    console.log('Image loaded');
    this.hasLoaded = true;
  }

}
