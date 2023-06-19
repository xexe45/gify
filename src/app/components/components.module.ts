import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TagComponent } from './tag/tag.component';
import { ItemNotFoundComponent } from './item-not-found/item-not-found.component';



@NgModule({
  declarations: [
    CardComponent,
    TagComponent,
    ItemNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CardComponent,
    TagComponent,
    ItemNotFoundComponent
  ]
})
export class ComponentsModule { }
