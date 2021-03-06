import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { WebSocketService } from './services/websocket.service';
import { SessionService } from './services/session.service';
import { ChatboxService } from './services/chatbox.service';

import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { TableComponent } from './components/table/table.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { PlayerBadgeComponent } from './components/player-badge/player-badge.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    TableComponent,
    ChatboxComponent,
    PlayerBadgeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    WebSocketService,
    SessionService,
    ChatboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
