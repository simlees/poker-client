import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './../../services/websocket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.connect();
  }
  
  connect() {
    this.webSocketService.connect();
  }

}
