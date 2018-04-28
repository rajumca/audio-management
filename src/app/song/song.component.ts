import {Song} from '../album/song';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  constructor() {}
  @Input() song: Song = null;
  ngOnInit() {
  }

}
