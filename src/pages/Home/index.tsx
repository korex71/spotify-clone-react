import React from "react";
import ArtistCard from "../../component/ArtistCard";

function Home() {
  return (
    <div>
      <h2 className="title mb-3">Tocado recentemente</h2>

      <div className="row list mb-5" />

      <div className="d-flex align-items-center mb-3 mb-3">
        <div>
          <h2 className="title mb-1">Artistas populares</h2>
        </div>
      </div>

      <div className="row list mb-5">
        <ArtistCard
          artist="The Weeknd"
          imgUri="https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d"
        />

        <ArtistCard
          artist="Dua Lipa"
          imgUri="https://i.scdn.co/image/330f9806621bc0fe67f5c06f2f1f8df53d011b4e"
        />

        <ArtistCard
          artist="Ariana Grande"
          imgUri="https://i.scdn.co/image/b1dfbe843b0b9f54ab2e588f33e7637d2dab065a"
        />

        <ArtistCard
          artist="Pedro Sampaio"
          imgUri="https://i.scdn.co/image/67970d39f2e97bad35610ed8061f13aee44b85e7"
        />

        <ArtistCard
          artist="AC/DC"
          imgUri="https://rollingstone.uol.com.br/media/_versions/acdc_widelg.jpg"
        />

        <ArtistCard
          artist="Travis Scott"
          imgUri="https://i.scdn.co/image/fec51156ed94b7ee30fbd4c7fd29b4a840e7daec"
        />
      </div>
    </div>
  );
}

export default Home;
