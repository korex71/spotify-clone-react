import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from "react";
import { useAudio, useEffectOnce } from "react-use";
import {
  HTMLMediaControls,
  HTMLMediaProps,
  HTMLMediaState,
} from "react-use/lib/factory/createHTMLMediaHook";
import api, { API_URL } from "../api/config";
import { signInWithGoogle } from "../apix";
import { songs as useSongs } from "../helpers/localStorage";

export interface ISearchData {
  youtubeId: string;
  title: string;
  artist: string;
  album: string;
  thumbnailUrl: string;
  duration: {
    label: string;
    totalSeconds: number | null;
  };
}
export interface IUserData {
  id: string | null;
  name: string | null;
  photoURL: string | null;
}
interface IContextData {
  inputSearch: string;
  setInputSearch: Dispatch<SetStateAction<string>>;
  searchResults: ISearchData[];
  handleSearch: () => void;
  selectedSong: ISearchData;
  setSelectedSong: Dispatch<SetStateAction<ISearchData>>;
  audio: React.ReactElement<HTMLMediaProps>;
  state: HTMLMediaState;
  controls: HTMLMediaControls;
  ref: React.MutableRefObject<HTMLAudioElement | null>;
  isLoadingSearch: boolean;
  setUser: Dispatch<SetStateAction<IUserData | null>>;
  handleLoginGoogle: () => Promise<void>;
  setUserOnStorage: (user: IUserData) => void;
  getUserFromStorage: () => Promise<IUserData | null>;
  user: IUserData | null;
  userSongs: ISearchData[] | null;
  setUserSongs: Dispatch<SetStateAction<ISearchData[] | null>>;
}
interface IProps {
  children: ReactNode;
}

export const AppContext = createContext({} as IContextData);

export default function ContextProvider({ children }: IProps) {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState({} as ISearchData);
  const [user, setUser] = useState({} as IUserData | null);
  const [userSongs, setUserSongs] = useState<ISearchData[] | null>(
    [] as ISearchData[]
  );
  // const [storageSong, setStorageSong] = useState({} as ISearchData);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);

  const [audio, state, controls, ref] = useAudio({
    src: `${API_URL}/audio/${selectedSong.youtubeId}`,
    autoPlay: true,
  });

  function handleSearch() {
    if (!inputSearch) return;
    setIsLoadingSearch(true);
    api
      .get(`/search/${inputSearch}`)
      .then((res) => res.data)
      .then((data) => data.musics)
      .then((musics) => {
        setIsLoadingSearch(false);
        console.log(musics);
        setSearchResults(musics);
      })
      .catch((err) => {
        setIsLoadingSearch(false);
        console.warn(err);
      });
    console.log(inputSearch);
  }

  async function getUserFromStorage(): Promise<IUserData | null> {
    const account = localStorage.getItem("@App:account");

    if (!account) return null;

    try {
      const user: IUserData = JSON.parse(account);

      const songs = await useSongs.getSongsFromDatabase(user);

      if (songs) {
        setUserSongs(songs);
      }

      return user as IUserData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  function setUserOnStorage(user: IUserData) {
    try {
      const account = JSON.stringify(user);

      return localStorage.setItem("@App:account", account);
    } catch (error) {
      return console.error(error);
    }
  }

  async function handleLoginGoogle() {
    let result = await signInWithGoogle();

    if (result) {
      console.log(result.user);
      const userData = result.user;

      const parsedUser = {
        id: userData ? userData.uid : null,
        name: userData ? userData.displayName : null,
        photoURL: userData ? userData.photoURL : null,
      };

      setUser(parsedUser);
      setUserOnStorage(parsedUser);
    } else {
      alert("Error");
    }
  }

  useEffect(() => {
    // ** ? Redirect to search
  }, [searchResults]);

  useEffectOnce(() => {
    const song = localStorage.getItem("@App:song");
    if (song) {
      console.log("Loading song from localStorage");
      try {
        const json = JSON.parse(song);
        setSelectedSong(json);
        // setStorageSong(json);D
      } catch (error) {
        console.warn(error);
      }
    }
  });

  return (
    <AppContext.Provider
      value={{
        inputSearch,
        setInputSearch,
        searchResults,
        handleSearch,
        selectedSong,
        setSelectedSong,
        audio,
        state,
        controls,
        ref,
        isLoadingSearch,
        setUser,
        user,
        handleLoginGoogle,
        setUserOnStorage,
        getUserFromStorage,
        userSongs,
        setUserSongs,
      }}
    >
      {audio}
      {children}
    </AppContext.Provider>
  );
}

export const useProvider = () => useContext(AppContext);
