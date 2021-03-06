import { Component, OnInit, Input } from '@angular/core';
import { Card } from './../../models/card.model';

@Component({
  selector: 'playing-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  isFaceUp: boolean;

  constructor() { }

  ngOnInit() {
  }

}
