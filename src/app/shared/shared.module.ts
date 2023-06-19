import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
