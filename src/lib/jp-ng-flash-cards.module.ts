import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { JpNgFlashCardsComponent } from './jp-ng-flash-cards.component';

@NgModule({
  declarations: [JpNgFlashCardsComponent],
  imports: [
    CommonModule
  ],
  exports: [JpNgFlashCardsComponent]
})
export class JpNgFlashCardsModule { }
