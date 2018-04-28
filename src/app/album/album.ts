import { Song } from './song';
export class Album {
  id: number;
  name: string;
  composer: string;
  year: number;
  songs: Song[];
  favourite: boolean;
  rating: number;
  accessed: number;
  rank: number;
  path: string;
  show: boolean;
}
