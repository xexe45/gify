import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';
import { Gif } from '../inerfaces/gif.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
  }

  public get tagsHistory(): string[] {
    return this.gifService.tagsHistory;
  }

  public get tagList(): Gif[]{
    return this.gifService.gifList;
  }

  public searchTag(tag: string): void {
    this.gifService.searchTag(tag);
  }

}
