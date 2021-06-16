import { Container } from "./styles";
import * as Feather from "react-feather";
import { AppContext, ISearchData } from "../../contexts/AppContext";
import { useContext } from "react";

type SearchSongProps = { item: ISearchData };

function SearchSongItem({ item }: SearchSongProps) {
  const { selectedSong, setSelectedSong, controls, state } = useContext(AppContext);
  const handleClick = () => {
    if (item.youtubeId === selectedSong.youtubeId) {
      state.paused ? controls.play() : controls.pause()
    } else {
      setSelectedSong(item);
    }
  };

  return (
    <Container onClick={() => handleClick()} className="col-sm-10 col-md-7 col-lg-5 col-xl-4">
      <div className="song-image">
        <img src={item.thumbnailUrl} alt="Thumbnail" height="95" width="95" />
      </div>
      <div className="row">
      <div className="song-info">
        <h3 title="song-title">{item.title}</h3>
        <div className="column">
          <span className="song-author">{item.artist}</span>
          <span className="ml-2 badge badge-secondary p-2 px-3">MÚSICA</span>
        </div>
      </div>
      <div className="song-play">
        {
          selectedSong.youtubeId === item.youtubeId ?
            (state.paused
            ? <Feather.Play width="23" fill="white" />
            : <Feather.Pause width="23" fill="white" />)
          : <Feather.Play width="23" fill="white"/>
        }

      </div>
      </div>
    </Container>
  );
}

export default SearchSongItem;
