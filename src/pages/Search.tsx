import React, { useContext } from "react";
import SearchSongItem from "../component/SearchSongItem";
import BestResultCard from "../component/BestResultCard";
import { AppContext } from "../contexts/AppContext";
export default function Search() {
  const { searchResults } = useContext(AppContext);

  return (
    <div>
      <div className="row">
        <h3 className="text-center text-white ml-4">
          {searchResults && "Melhor resultado"}
        </h3>
        <div className="container-fluid mt-3 mb-5 list-videos">
          {searchResults && searchResults.length !== 0 && (
            <BestResultCard item={searchResults[0]} />
          )}
        </div>
        <h3 className="text-center text-white ml-4">
          {searchResults && "Músicas"}
        </h3>
      </div>
      <div className="container-fluid mt-3 mb-5 list-videos">
        {searchResults &&
          searchResults.map((item, key) => {
            return <SearchSongItem key={key} item={item} />;
          })}
      </div>
    </div>
  );
}
