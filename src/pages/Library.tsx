import React, { useState, useEffect, useContext, useRef } from "react";
import SearchSongItem from "../component/SearchSongItem";
import { AppContext, ISearchData } from "../contexts/AppContext";
import * as Feather from "react-feather";
import { PlaylistContainer } from "./Lib/styles";
import { songs as useSongs } from "../helpers/localStorage";

export default function Library() {
  const { user } = useContext(AppContext);
  const imgRef = useRef<HTMLImageElement>(null);
  const [userSongs, setUserSongs] = useState<ISearchData[] | null>(
    [] as ISearchData[]
  );
  // const [plBg, setPlBg] = useState<string>(
  //   "linear-gradient(0deg,hsla(0,0%,100%,0.2),hsla(0,0%,100%,0.2)) #1877f2"
  // );

  const plBg =
    "linear-gradient(0deg,hsla(0,0%,100%,0.2),hsla(0,0%,100%,0.2)) #1877f2";

  useEffect(() => {
    if (!user || !user.id) return;

    const songs = useSongs.getSongsFromStorage();

    if (songs) {
      setUserSongs(songs);
    } else {
      useSongs.getSongsFromDatabase(user).then((songs) => {
        if (songs) {
          useSongs.addSongsFromDatabase(songs);
          setUserSongs(songs);
        }
      });
    }
  }, [user]);

  return (
    <div id="library" className="library-list text-white">
      <PlaylistContainer id="playlist-container" bg={plBg}>
        <div id="playlist-img">
          {userSongs && userSongs.length ? (
            <img
              src={userSongs[0].thumbnailUrl}
              width="200"
              height="200"
              alt="playlist-img"
              ref={imgRef}
            />
          ) : (
            ""
          )}
        </div>
        <div id="heading">
          <div className="subtitle">
            <span>Playlist</span>
          </div>
          <div className="title">
            <span>Músicas Curtidas</span>
          </div>
          <div className="info">
            <span>
              <img src={(user && user.photoURL) || ""} alt="user" />
              {user && user.name} - {userSongs && userSongs.length} Músicas
            </span>
          </div>
        </div>
        <div id="heart">
          <span>
            <Feather.Heart width="16" fill="white" />
          </span>
        </div>
      </PlaylistContainer>
      <div className="container-fluid mt-3 mb-5 list-videos">
        {userSongs &&
          userSongs.length !== 0 &&
          userSongs.map((item, key) => {
            return <SearchSongItem key={key} item={item} />;
          })}
      </div>
    </div>
  );
}
