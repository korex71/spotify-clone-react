import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react";

import api from "../api/config";
interface IContextData {
  inputSearch: string;
  setInputSearch: Dispatch<SetStateAction<string>>;
  searchResults: ISearchResults[];
  handleSearch: () => void;
}

interface ISearchResults {
  title: string;
  type: string;
  thumbnails: Array<Object>;
  bestThumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  id: string;
  author: {
    avatars: Array<Object>;
    bestAvatar?: { url: string };
    name: string;
    channelID: string;
  };
  isLive?: boolean;
  duration?: string;
  uploadedAt?: string;
  views: number;
}
interface IProps {
  children: ReactNode;
}

export const AppContext = createContext({} as IContextData);

export default function ContextProvider({ children }: IProps) {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useProvider = () => useContext(AppContext);
