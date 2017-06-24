import { Component, OnInit } from '@angular/core';
import { ServerSocketService } from './server-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private serverSocketService: ServerSocketService) {
  }

  title = 'app';

  ngOnInit() {
    this.serverSocketService.connect().subscribe(
      result => {
        console.log(result);
      }
    );
  }



}
