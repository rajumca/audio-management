import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlbumService} from './service/album.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { FormsModule } from '@angular/forms';
import { SongComponent } from './song/song.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    SongComponent
    ],
   imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
