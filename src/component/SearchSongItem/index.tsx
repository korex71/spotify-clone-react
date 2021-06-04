import { Container } from "./styles";
import * as Feather from "react-feather";
import { AppContext, ISearchData } from "../../contexts/AppContext";
import { useContext } from "react";

type SearchSongProps = { item: ISearchData };

function SearchSongItem({ item }: SearchSongProps) {
  const { selectedSong, setSelectedSong } = useContext(AppContext);
  const time = !item.duration.totalSeconds ? "" : item.duration.label;
  const handleClick = () => {
    if (item.youtubeId === selectedSong.youtubeId) {
      //pause / play
    } else {
      setSelectedSong(item);
    }
  };
  const thumbnail = item.thumbnailUrl || "";

  return (
    <Container onClick={() => handleClick()}>
      <div className="song-image">
        {item.youtubeId === selectedSong.youtubeId ? (
          <Feather.Pause fill="white" width="15" style={{ display: "block" }} />
        ) : (
          ""
        )}
        <img src={thumbnail} alt="Thumbnail" width="45" height="45" />
      </div>
      <div className="song-info">
        <span title="song-title">{item.title}</span>
        <span className="song-author">{item.artist}</span>
      </div>
      <div className="song-like">
        <Feather.Heart width="16" strokeWidth="1" />
      </div>
      <span className="song-duration">{time}</span>
    </Container>
  );
}

export default SearchSongItem;
