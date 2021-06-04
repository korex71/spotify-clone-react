import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react";
import { useAudio } from "react-use";
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
  const [audio, state, controls, ref] = useAudio({
    src: `${API_URL}/audio/${selectedSong.youtubeId}`,
    autoPlay: true,
  });

  function handleSearch() {
    if (!inputSearch) return;
    api
      .get(`/search/${inputSearch}`)
      .then((res) => res.data)
      .then((data) => data.musics)
      .then((musics) => setSearchResults(musics))
      .catch((err) => console.warn(err));
    console.log(inputSearch);
  }

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useProvider = () => useContext(AppContext);
