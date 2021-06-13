import { Container } from "./styles";
import * as Feather from "react-feather";
import { AppContext, ISearchData } from "../../contexts/AppContext";
import { useContext } from "react";

type SearchSongProps = { item: ISearchData };

function SearchSongItem({ item }: SearchSongProps) {
  const { selectedSong, setSelectedSong, state, controls } = useContext(AppContext);
  const time = !item.duration.totalSeconds ? "" : item.duration.label;

  const handleClick = () => {
    if (item.youtubeId === selectedSong.youtubeId) {
      state.paused ? controls.play() : controls.pause()
    } else {
      setSelectedSong(item);
    }
  };
  const thumbnail = item.thumbnailUrl || "";

  return (
    <Container onClick={() => handleClick()} className="row py-1 px-2">
      <div id="song" className="d-flex flex-row">
        <div className="song-image">
          {(item.youtubeId === selectedSong.youtubeId && !state.paused) && (
            <Feather.Pause fill="white" width="15" style={{ display: "block" }} />
          )}
          <img 
          src={thumbnail}
          alt="Thumbnail"
           width="45" height="45"
           style={item.youtubeId === selectedSong.youtubeId ? {
             opacity: (item.youtubeId === selectedSong.youtubeId && state.paused) ? 1 : 0.8
           } : {}} />
        </div>
        <div className="song-info">
          <span title="song-title">{item.title}</span>
          <span className="song-author">{item.artist}</span>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="song-like col-auto">
          <Feather.Heart width="16" strokeWidth="1" />
        </div>
        <div className="duration col-auto">
         <span className="song-duration">{time}</span>
        </div>
      </div>
    </Container>
  );
}

export default SearchSongItem;
