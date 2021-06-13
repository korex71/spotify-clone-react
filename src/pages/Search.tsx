import React, { useContext, useEffect } from "react";
import SearchSongItem from "../component/SearchSongItem";
import BestResultCard from "../component/BestResultCard";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { AppContext } from "../contexts/AppContext";
import * as Feather from "react-feather";

export default function Search() {
  const { searchResults, isLoadingSearch } = useContext(AppContext);

  useEffect(() => {
    console.log(navigator.onLine ? "online" : "offline");
  }, [navigator.onLine]) // eslint-disable-line

  if(!navigator.onLine){
    return (
      <div className="d-flex justify-content-center align-items-center h-100 flex-column">
            <Feather.WifiOff color="white" width="30" height="30" />
            <span className="text-light pt-3">Sem conexão à internet.</span>
      </div>
    )
  }

  if(searchResults.length === 0){
    return (
      <div>
        <div className="row">
          <h3 className="text-center text-light m-3">
            Comece pesquisando uma música!
          </h3>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="row">
        <h3 className="text-center text-light ml-4">
          {searchResults && "Melhor resultado"}
        </h3>
        <div className="container-fluid mt-3 mb-5 list-videos">
          {(searchResults.length !== 0 && !isLoadingSearch) && (
            <BestResultCard item={searchResults[0]} />
          )
        }
        {
          isLoadingSearch && <SkeletonLoader block width={'25%'} height={200} background="#202020" />
        }
        </div>
        <h3 className="text-center text-white ml-4">
          {searchResults && "Músicas"}
        </h3>
      </div>
      <div className="container-fluid mt-3 mb-5 list-videos">
        {(searchResults.length !== 0 && !isLoadingSearch) &&
          searchResults.map((item, key) => {
            return <SearchSongItem key={key} item={item} />;
          })
        }
        {
          isLoadingSearch && (
            <>
            <SkeletonLoader block height={60} background="#202020" />
            <br/>
            <SkeletonLoader block height={60} background="#202020" />
            <br/>
            <SkeletonLoader block height={60} background="#202020" />
            <br/>
            <SkeletonLoader block height={60} background="#202020" />
            <br/>
            <SkeletonLoader block height={60} background="#202020" />
            <br/>
            <SkeletonLoader block height={60} background="#202020" />
            <br/>
            <SkeletonLoader block height={60} background="#202020" />
          </>
          )
        }
      </div>
    </div>
  );
}
