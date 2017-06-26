import { Component, OnInit } from '@angular/core';
import { ChatMessage } from './../../models/chat-message.model';

import { ChatboxService } from './../../services/chatbox.service';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  messages: ChatMessage[];
  draft: string;

  constructor(
    private chatboxService: ChatboxService
  ) { }

  ngOnInit() {
    this.messages = this.chatboxService.getMessages();
  //   this.messages = [
  //     {
  //       'sender': 'SK897',
  //       'content': 'Hey guys hows it goin',
  //       'isAnnouncement': false,
  //     },
  //     {
  //       'sender': 'gemma_is_cool',
  //       'content': 'fuk off',
  //       'isAnnouncement': false,
  //     },
  //     {
  //       'sender': '',
  //       'content': '<b>Paulo</b> joined the game.',
  //       'isAnnouncement': true,
  //     },
  //     {
  //       'sender': 'SK897',
  //       'content': 'Cool',
  //       'isAnnouncement': false,
  //     }
  //   ] as ChatMessage[];
  }

  send() {
    this.chatboxService.sendMessage(this.draft);
  }

}
