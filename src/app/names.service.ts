import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http }       from '@angular/http';

@Injectable()
export class NamesService {

  url = 'localhost:8080';

  constructor(
    private http: Http
  ) { }

  public getNames(name: Observable<string>) {
    return this.http.get('localhost:8080');
  }

}
