import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { WebSocketService } from './websocket.service';

import { ChatMessage } from './../models/chat-message.model';
import { BaseMessage, MessageType } from './../models/base-message.model';

@Injectable()
export class ChatboxService {

  messages: ChatMessage[] = [];

  constructor(
    private sessionService: SessionService,
    private webSocketService: WebSocketService
  ) {
    this.webSocketService.getMessages().subscribe(
      response => {
        this.messages.push(response.chatMessage);
      }
    );
  }

  public sendMessage(content: string) {
    let message: ChatMessage = {
      sender: this.sessionService.getUsername(),
      content: content,
      isAnnouncement: false
    };
    this.webSocketService.sendMessage(MessageType.CHAT, message);
  }

  public receiveMessage(message: ChatMessage) {

  }

  public getMessages() {
    return this.messages;
  }

}
