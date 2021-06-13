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
}
interface IProps {
  children: ReactNode;
}

export const AppContext = createContext({} as IContextData);

export default function ContextProvider({ children }: IProps) {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState<ISearchData>(
    {} as ISearchData
  );
  // const [storageSong, setStorageSong] = useState({} as ISearchData);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);

  const [audio, state, controls, ref] = useAudio({
    src: `${API_URL}/audio/${selectedSong.youtubeId}`,
    autoPlay: true,
  });

  function handleSearch() {
    if (!inputSearch) return;
    setIsLoadingSearch(true)
    api
      .get(`/search/${inputSearch}`)
      .then((res) => res.data)
      .then((data) => data.musics)
      .then((musics) => {
        setIsLoadingSearch(false)
        setSearchResults(musics)
      })
      .catch((err) => {
        setIsLoadingSearch(false)
        console.warn(err)
      });
    console.log(inputSearch);
  }

  useEffect(() => {
    if(searchResults.length === 0) return;
    // ** ? Redirect to search
  }, [searchResults])

  useEffectOnce(() => {
    const song = localStorage.getItem("@App:song");
    if (song) {
      console.log("Loading song from localStorage");
      try {
        const json = JSON.parse(song);
        setSelectedSong(json);
        // setStorageSong(json);
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
      }}
    >
      {audio}
      {children}
    </AppContext.Provider>
  );
}

export const useProvider = () => useContext(AppContext);
