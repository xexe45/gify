import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('search') search!: ElementRef<HTMLInputElement>;
  constructor(private readonly gifService: GifService) { }

  ngOnInit(): void {
  }

  searchTag(): void {
    const newTag = this.search.nativeElement.value;
    console.log(newTag);
    this.gifService.searchTag(newTag);
    this.search.nativeElement.value = '';
  }

}
