import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import config from "./firebaseConfig";

import { ISearchData } from "./contexts/AppContext";

import { songs as useSongs } from "./helpers/localStorage";

const app = firebase.initializeApp(config);

export const db = app.firestore();

interface IInitialSongStorage {
  userId: string;
  songs: ISearchData[];
}

async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  let result = await firebase.auth().signInWithPopup(provider);
  return result;
}

async function addNewSong(userId: string, songs: ISearchData) {
  const data: IInitialSongStorage = {
    userId,
    songs: [songs],
  };

  const dbCollection = db.collection("users").doc(userId);

  const doc = await dbCollection.get();

  if (!doc.exists) {
    const document = await dbCollection.set(data);
    // Create first document
    console.log(document);

    return;
  }

  // Get Document and update with new song
  const document = doc.data();

  if (document) {
    let dbSongs: ISearchData[] = document.songs;

    if (dbSongs.find((song) => song.youtubeId === songs.youtubeId)) {
      // Song already exists
      return;
    }

    const inserted = await dbCollection.update({
      songs: [...dbSongs, songs],
    });

    console.log(inserted);
  }
}

async function getUserLibrary(userId: string): Promise<ISearchData[] | null> {
  const dbCollection = db.collection("users").doc(userId);

  const doc = await dbCollection.get();

  const document = doc.data();

  if (!document) return null;

  let songs: ISearchData[] = document.songs;

  if (!songs) return null;

  const data = useSongs.addSongsFromDatabase(songs);

  if (!data) return null;

  return data;
}

export { signInWithGoogle, addNewSong, getUserLibrary };
