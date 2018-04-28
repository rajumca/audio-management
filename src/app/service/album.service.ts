import { Album } from '../album/album';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class AlbumService {

 constructor( private http: HttpClient) { }

  getAlbums():  Observable<Album> {
   return this.http.get<Album>('http://localhost:8080');
}
}
