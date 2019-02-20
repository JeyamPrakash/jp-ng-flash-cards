import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-jp-ng-flash-cards',
  templateUrl: './jp-ng-flash-cards.html',
  styleUrls: ['./jp-ng-flash-cards.scss']
})
export class JpNgFlashCardsComponent implements OnInit {

  flipped = false;
  @Input() flashCards = [];

  constructor() { }

  ngOnInit() {
  }
  flip(card) {
    card.flipped = !card.flipped;
  }

}
