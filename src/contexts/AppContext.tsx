import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react";
import { Video } from "ytsr";
import api from "../api/config";
interface IContextData {
  inputSearch: string;
  setInputSearch: Dispatch<SetStateAction<string>>;
  searchResults: Video[];
  handleSearch: () => void;
  selectedSong: Video;
  setSelectedSong: Dispatch<SetStateAction<Video>>;
}
interface IProps {
  children: ReactNode;
}

export const AppContext = createContext({} as IContextData);

export default function ContextProvider({ children }: IProps) {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState<Video>({} as Video);

  function handleSearch() {
    if (!inputSearch) return;
    api
      .get(`/search/${inputSearch}`)
      .then((res) => res.data)
      .then((data) => setSearchResults(data))
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useProvider = () => useContext(AppContext);
