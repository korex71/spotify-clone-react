import { ISearchData } from "../contexts/AppContext";

async function addSong(song: ISearchData) {
  const storagedSongs = localStorage.getItem("@App:songs");

  if (!storagedSongs) {
    localStorage.setItem("@App:songs", JSON.stringify([song]));
    return;
  }

  try {
    const storaged = JSON.parse(storagedSongs);
    const newSong = [...storaged, song];
    localStorage.setItem("@App:songs", JSON.stringify(newSong));
  } catch (error) {
    console.warn(error);
  }
}
