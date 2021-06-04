import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import GlobalStyle from "./App.global";

import Player from "./component/Player";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Navbar from "./component/Navbar";
import Topbar from "./component/Topbar";
import Main from "./component/Main";

export default function App() {
  const { selectedSong } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Topbar />
        <Main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/library" component={Library} />
            <Route path="/search" component={Search} />
          </Switch>
        </Main>
        {selectedSong.youtubeId && <Player />}
      </Router>
    </>
  );
}
