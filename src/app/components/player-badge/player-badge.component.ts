import { Component, OnInit } from '@angular/core';

import { Player } from './../../models/player.model';
import { Card } from './../../models/card.model';

@Component({
  selector: 'player-badge',
  templateUrl: './player-badge.component.html',
  styleUrls: ['./player-badge.component.scss']
})
export class PlayerBadgeComponent implements OnInit {

  player: Player;
  cards: Card[];

  constructor() { }

  ngOnInit() {
    this.cards = [{
      suit: 1,
      value: 4
    } as Card];
    this.player = new Player('SKL99', 'redface', 'Waiting...', 8000, true);
  }

}
