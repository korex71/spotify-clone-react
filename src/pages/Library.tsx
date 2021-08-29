import React, { useState, useEffect, useContext } from "react";
import SearchSongItem from "../component/SearchSongItem";
import { AppContext, ISearchData } from "../contexts/AppContext";
import { db } from "../apix";

export default function Library() {
  const { user } = useContext(AppContext);
  const [userSongs, setUserSongs] = useState([] as ISearchData[]);

  useEffect(() => {
    console.log(user);
    if (!user || !user.id) return;

    const dbCollection = db.collection("users").doc(user.id);
    dbCollection.get().then((doc) => {
      const data = doc.data();
      console.log(data);

      if (data) setUserSongs(data.songs);
    });
  }, [user]);

  return (
    <div id="library" className="library-list text-white">
      <div className="container-fluid mt-3 mb-5 list-videos">
        {userSongs.length !== 0 &&
          userSongs.map((item, key) => {
            return <SearchSongItem key={key} item={item} />;
          })}
      </div>
    </div>
  );
}
