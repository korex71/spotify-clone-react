import { Container } from "./styles";
import { Video } from "ytsr";
import * as Feather from "react-feather";

interface SearchSongItemProps {
  item: Video;
  onClick: any;
}

function SearchSongItem({ item, onClick }: SearchSongItemProps) {
  const thumbnail = item.bestThumbnail.url || "";
  const author = item.author?.name || "";

  return (
    <Container onClick={onClick}>
      <div className="song-image">
        <Feather.Play fill="white" width="15" />
        <img src={thumbnail} alt="Thumbnail" width="45" height="45" />
      </div>
      <div className="song-info">
        <span title="song-title">{item.title}</span>
        <span className="song-author">{author}</span>
      </div>
      <div className="song-like">
        <Feather.Heart width="16" strokeWidth="1" />
      </div>
      <span className="song-duration">{item.duration}</span>
    </Container>
  );
}

export default SearchSongItem;
