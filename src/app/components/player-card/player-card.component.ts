import { Component, OnInit } from '@angular/core';

import { Player } from './../../models/player.model';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  player: Player;

  constructor() { }

  ngOnInit() {
    this.player = new Player('SKL99', 'redface', 'Waiting...', 8000, true);
  }

}
