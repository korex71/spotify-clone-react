interface ArtistCardProps {
  artist: string;
  imgUri: string;
}

function ArtistCard({ artist, imgUri }: ArtistCardProps) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
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
            onClick={() => null}
            className="d-flex justify-content-center align-items-center"
          >
            <i className="fas fa-play" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
