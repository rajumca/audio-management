import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class AlbumService {

 constructor( private http: HttpClient) { }

  getAlbums():  Observable<String> {
   return this.http.get<String>('http://localhost:8080');
}
}
