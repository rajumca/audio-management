import { AlbumService } from '../service/album.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums = null;
  constructor(private albumService: AlbumService) {}
  getAlbums(): void {
    this.albumService.getAlbums().subscribe(speed =>
      this.albums = speed
    );
  }
  ngOnInit() {
    this.getAlbums();
  }

 toggle(album) {
   album.show = !album.show;
 }
}
