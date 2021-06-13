import { useContext } from "react";
import * as Feather from "react-feather"
import { AppContext } from "../../contexts/AppContext";
interface ArtistCardProps {
  artist: string;
  imgUri: string;
}

function ArtistCard({ artist, imgUri }: ArtistCardProps) {
  const { setInputSearch, handleSearch } = useContext(AppContext);

  return (
    <div className="col-lg-3 col-md-5 col-sm-10 mb-3">
      <div className="card">
        <img
          className="card-img-top rounded-circle mb-3"
          src={imgUri}
          alt="card"
        />
        <div className="card-body p-0">
          <h5 className="card-title">{artist}</h5>
          <p className="card-text">Artista</p>
        </div>

        <div className="btn-play">
          <button
            type="button"
            onClick={() => {
              setInputSearch(artist);
              handleSearch();
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <Feather.Play width="18" fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
