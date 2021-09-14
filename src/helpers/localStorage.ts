import { ISearchData, IUserData } from "../contexts/AppContext";
import { db } from "../apix";

function addSongsFromDatabase(songs: ISearchData[]): ISearchData[] | null {
  try {
    const songsData: ISearchData[] = [...songs];

    localStorage.setItem("@App:songs", JSON.stringify(songsData));

    return songsData;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

function addSong(song: ISearchData[]): void {
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

function getSongsFromStorage(): null | ISearchData[] {
  const storagedSongs = localStorage.getItem("@App:songs");

  if (!storagedSongs) {
    return null;
  }

  try {
    const storaged: ISearchData[] = JSON.parse(storagedSongs);
    return storaged;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

async function getSongsFromDatabase(
  user: IUserData
): Promise<ISearchData[] | null> {
  if (!user.id) return null;

  const dbCollection = db.collection("users").doc(user.id);

  const doc = await dbCollection.get();

  const data = doc.data();

  console.log(data);

  if (!data) return null;

  let songs: ISearchData[] = data.songs;

  return songs;
}

export const songs = {
  addSong,
  getSongsFromStorage,
  addSongsFromDatabase,
  getSongsFromDatabase,
};
