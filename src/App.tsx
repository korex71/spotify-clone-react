import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import GlobalStyle from "./App.global";

import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";

import Login from "./component/Login"
import Player from "./component/Player";
import Navbar from "./component/Navbar";
import Topbar from "./component/Topbar";
import Main from "./component/Main";

import { useRef } from "react";

export default function App() {
  const { selectedSong, user } = useContext(AppContext);
  const mainRef = useRef(null)

  

  if(user && !user.id){
    return <Login />
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Topbar mainRef={mainRef} />
        <Main ref={mainRef}>
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
