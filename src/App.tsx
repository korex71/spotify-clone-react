import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.global.css";
import * as Feather from "react-feather";

import Player from "./component/Player";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";

export default function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [songInfo, setSongInfo] = useState({
    id: "",
    title: "",
    url: "",
  });

  function handleSearch() {
    // AXIOS
    console.log(inputSearch);
  }

  return (
    <>
      <Router>
        <nav className="nav-bar d-flex flex-column">
          <div className="nav-bar-header d-flex pl-4 pt-4 pb-4 ">
            {/* <h4 className="text-success noselect">Electron Music</h4> */}
            <svg viewBox="0 0 1134 340" className="spotify-logo">
              <title>Spotify</title>
              <path
                fill="currentColor"
                d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
              ></path>
            </svg>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item noselect">
              <NavLink
                to="/"
                activeClassName="active"
                className="nav-link d-flex align-items-center"
                exact
              >
                <div className="icon home-icon NavBar__icon">
                  <svg
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>Início</span>
              </NavLink>
            </li>
            <li className="nav-item noselect">
              <NavLink
                to="/search"
                activeClassName="active"
                className="nav-link d-flex align-items-center"
              >
                <div className="icon search-icon NavBar__icon">
                  <Feather.Search width="24" height="24" />
                </div>
                <span>Buscar</span>
              </NavLink>
            </li>
            <li className="nav-item noselect">
              <NavLink
                to="/library"
                activeClassName="active"
                className="nav-link d-flex align-items-center"
              >
                <div className="icon collection-active-icon NavBar__icon">
                  <svg
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>Sua Biblioteca</span>
              </NavLink>
            </li>
          </ul>

          <div className="root-list d-flex flex-column mt-4">
            <div className="root-list-header noselect">
              <h2>Playlists</h2>
            </div>

            <div className="root-list-body noselect">
              <a data-toggle="modal" data-target="#downloadModal" href="#modal">
                <div className="root-list-item d-flex">
                  <div className="root-list-icon add d-flex justify-content-center align-items-center">
                    <i className="fas fa-plus text-dark" />
                  </div>
                  <span>Criar Playlist</span>
                </div>
              </a>
              <a data-toggle="modal" data-target="#downloadModal" href="#modal">
                <div className="root-list-item d-flex">
                  <div className="root-list-icon heart d-flex justify-content-center align-items-center">
                    <i className="fas fa-heart" />
                  </div>
                  <span>Downloads</span>
                </div>
              </a>
            </div>
            <hr className="root-list-divider" />

            <ul className="navbar-nav playlist-scroll overflow-auto">
              <li>
                <div className="playlist-item d-flex align-items-center">
                  <a href="#songs">Músicas de filmes que marcaram</a>
                </div>
              </li>
            </ul>

            <div className="navbar-footer">
              {/* <a href="#install" className="d-flex align-items-center">
                <i className="far fa-arrow-alt-circle-down mr-3" />
                <span>Instalar aplicativo</span>
              </a> */}
            </div>
          </div>
        </nav>

        <div className="top-bar">
          <header id="header" className="d-flex header position-relative">
            <div id="header-overlay" />
            <div className="icons-action-left d-flex">
              <button
                type="button"
                className="page-back d-flex justify-content-center align-items-center"
              >
                <Feather.ChevronLeft />
              </button>
              <button
                type="button"
                className="page-go d-flex justify-content-center align-items-center ml-3"
              >
                <Feather.ChevronRight />
              </button>
              <input
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="ml-3 custom-search"
                type="text"
                placeholder="Artistas, músicas ou podcasts"
              />
              <Feather.Search width="16" height="16" />
            </div>
            <div className="d-flex ml-auto">
              <div className="dropdown menu ml-3">
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center"
                  data-toggle="dropdown"
                >
                  <Feather.User width="16" height="16" />
                  <span>Usuário</span>
                  <i className="fas fa-caret-down ml-2 mr-2" />
                </button>
                <div className="dropdown-menu mt-0 p-0">
                  <a href="#3" className="dropdown-item window-config">
                    Configurações
                  </a>
                  <a href="#2" className="dropdown-item">
                    Perfil
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#1" className="dropdown-item">
                    Sair
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div id="main" className="main d-flex flex-column">
          <div className="margin-top" />

          <div className="main-container">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/library" component={Library} />
              <Route path="/search" component={Search} />
            </Switch>
          </div>
        </div>
        <Player song={songInfo} />
      </Router>
    </>
  );
}
