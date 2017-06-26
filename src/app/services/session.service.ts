import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private userName = 'SKL99';

  constructor() {}

  getUsername() {
    return this.userName;
  }

}
