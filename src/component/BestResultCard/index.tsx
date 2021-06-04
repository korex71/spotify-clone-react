import { Container } from "./styles";
import * as Feather from "react-feather";
import { AppContext, ISearchData } from "../../contexts/AppContext";
import { useContext } from "react";

type SearchSongProps = { item: ISearchData };

function SearchSongItem({ item }: SearchSongProps) {
  const { selectedSong, setSelectedSong } = useContext(AppContext);
  const handleClick = () => {
    if (item.youtubeId === selectedSong.youtubeId) {
      //pause / play
    } else {
      setSelectedSong(item);
    }
  };

  return (
    <Container onClick={() => handleClick()} className="col-3">
      <div className="song-image">
        <img src={item.thumbnailUrl} alt="Thumbnail" height="95" width="95" />
      </div>
      <div className="song-info">
        <h3 title="song-title">{item.title}</h3>
        <span className="song-author">{item.artist}</span>
      </div>
      <div className="song-play">
        <Feather.Play width="20" fill="white" />
      </div>
    </Container>
  );
}

export default SearchSongItem;
