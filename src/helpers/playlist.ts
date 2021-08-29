import { ISearchData } from "../contexts/AppContext";
import api from "../api/config";

class Playlist {
  playlist: ISearchData[] = [];
  index = 0;

  private parseEqualSongs(list: ISearchData[]) {
    // return [...new Set(list)] <- Método ES6

    const removeDuplicated = list.filter((song, i) => list.indexOf(song) === i);
    return removeDuplicated;
  }

  createPlaylist(youtubeId: string): Promise<ISearchData> {
    return new Promise((resolve, reject) => {
      this.index = 0;

      api
        .get(`/simillar/${youtubeId}`)
        .then((res) => res.data)
        .then((data) => data.musics)
        .then((songs) => this.parseEqualSongs(songs))
        .then((songs) => {
          this.playlist = songs;
          this.index = 1;
          resolve(songs[0]);
        })
        .catch((err) => reject(err));
    });
  }

  getNextSong() {
    this.index += 1;
    const song = this.playlist[this.index];
    console.log(song);

    if (song) return song;
  }

  getLastSong() {
    this.index -= 1;
    const song = this.playlist[this.index];
    console.log(song);

    if (song) return song;
  }
}

export default new Playlist();
