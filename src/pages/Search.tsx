import React, { useContext } from "react";
import SearchSongItem from "../component/SearchSongItem";
import { AppContext } from "../contexts/AppContext";
export default function Search() {
  const { searchResults } = useContext(AppContext);

  return (
    <div>
      <div className="row">
        <h3 className="text-center search-text text-white">Pesquisa</h3>
      </div>
      <div className="container-fluid mt-3 mb-5 list-videos">
        {searchResults.map((item, key) => {
          return <SearchSongItem key={key} title={item.title} />;
        })}
      </div>
    </div>
  );
}
