import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observer }    from 'rxjs/Observer';
import { Observable }    from 'rxjs/Observable';

import { BaseMessage, MessageType } from './../models/base-message.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/dom/webSocket';


@Injectable()
export class WebSocketService {

  private baseUrl = 'localhost:8080';
  private connectUrl = this.baseUrl + '/poker-websocket';
  private subscribe = '/topic/out';
  private publish = '/app/in';

  private stompClient = null;

  private inboundMessages: Subject<BaseMessage>;

  constructor(
  ) {
    this.inboundMessages = new Subject<BaseMessage>();
  }

  public connect() {
    let self = this;
    var socket = new SockJS('http://'+this.connectUrl);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      this.subscribe(self.subscribe, function (response) {
        console.log(response);
        self.inboundMessages.next(JSON.parse(response.body) as BaseMessage);
        // self.handleResponse(JSON.parse(response.body) as BaseMessage);
      });
    });
  }

  public getMessages(): Observable<BaseMessage> {
    return this.inboundMessages.asObservable();
  }

  public disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    console.log("Disconnected");
  }

  public sendMessage(type: MessageType, payload: any) {
    let message: BaseMessage = {
      messageType: type,
      chatMessage: type == MessageType.CHAT ? payload : null
    }
    this.stompClient.send(this.publish, {}, JSON.stringify(message));
  }
}
