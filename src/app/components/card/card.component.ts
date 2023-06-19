import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/inerfaces/gif.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() gif: Gif = {} as Gif;
  constructor() { }

  ngOnInit(): void {
  }

}
