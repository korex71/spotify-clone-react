import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import GlobalStyle from "./App.global";

import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";

import Player from "./component/Player";
import Navbar from "./component/Navbar";
import Topbar from "./component/Topbar";
import Main from "./component/Main";

export default function App() {
  const { selectedSong, user } = useContext(AppContext);

  if(user && !user.id){
    return <Redirect to="/signin"/>
  }

  return (
    <Router>
      <GlobalStyle />
        <Navbar />
        <Topbar/>

        {/* App navigation */}
        <Main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/library" component={Library} />
            <Route path="/search" component={Search} />
          </Switch>
        </Main>
        {/* Render player only if have song */}
        {selectedSong.youtubeId && <Player />} 
    </Router>
  );
}
