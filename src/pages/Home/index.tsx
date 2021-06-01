import React from 'react';

function Home() {
  return (
    <div id="home" className="active-page">
      <h2 className="title mb-3">Tocado recentemente</h2>

      <div className="row list mb-5" />

      <div className="d-flex align-items-center mb-3 mb-3">
        <div>
          <h2 className="title mb-1">Artistas populares</h2>
        </div>
      </div>

      <div className="row list mb-5">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card">
            <img
              className="card-img-top rounded-circle mb-3"
              src="https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d"
              alt="card"
            />
            <div className="card-body p-0">
              <h5 className="card-title">The Weeknd</h5>
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

        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card">
            <img
              className="card-img-top rounded-circle mb-3"
              src="https://i.scdn.co/image/330f9806621bc0fe67f5c06f2f1f8df53d011b4e"
              alt="card"
            />
            <div className="card-body p-0">
              <h5 className="card-title">Dua Lipa</h5>
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

        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card">
            <img
              className="card-img-top rounded-circle mb-3"
              src="https://i.scdn.co/image/b1dfbe843b0b9f54ab2e588f33e7637d2dab065a"
              alt="card"
            />
            <div className="card-body p-0">
              <h5 className="card-title">Ariana Grande</h5>
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

        <div className="col-sm-6 col-lg-3 col-md-4 mb-3">
          <div className="card">
            <img
              className="card-img-top rounded-circle mb-3"
              src="https://i.scdn.co/image/67970d39f2e97bad35610ed8061f13aee44b85e7"
              alt="card"
            />
            <div className="card-body p-0">
              <h5 className="card-title">Pedro Sampaio</h5>
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

        <div className="col-sm-6 col-lg-3 col-md-4 mb-3">
          <div className="card">
            <img
              className="card-img-top rounded-circle mb-3"
              src="https://rollingstone.uol.com.br/media/_versions/acdc_widelg.jpg"
              alt="card"
            />
            <div className="card-body p-0">
              <h5 className="card-title">AC/DC</h5>
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

        <div className="col-sm-6 col-lg-3 col-md-4 mb-3">
          <div className="card">
            <img
              className="card-img-top rounded-circle mb-3"
              src="https://i.scdn.co/image/fec51156ed94b7ee30fbd4c7fd29b4a840e7daec"
              alt="card"
            />
            <div className="card-body p-0">
              <h5 className="card-title">Travis Scott</h5>
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
      </div>
    </div>
  );
}

export default Home;
