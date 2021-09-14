import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import GlobalStyle from "./App.global";

import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";

import Player from "./component/Player";
import Navbar from "./component/Navbar";
import Topbar from "./component/Topbar";
import Main from "./component/Main";
import api from "./api/config";

export default function App() {
  const { selectedSong, user, getUserFromStorage, setUser } =
    useContext(AppContext);

  if (user && !user.id) {
    const account = getUserFromStorage();

    account.then((data) => {
      if (!data) {
        return <Redirect to="/signin" />;
      }

      setUser(data);
    });
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Topbar />

      {/* App navigation */}
      <Main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/library" component={Library} />
          <Route path="/search" component={Search} />
          <Route path="/song/:id" children={Child} />
        </Switch>
      </Main>
      {/* Render player only if have song */}

      {selectedSong.youtubeId && <Player />}
    </Router>
  );
}

function Child() {
  let { id }: any = useParams();

  const { setSelectedSong } = useContext(AppContext);

  if (id) {
    api
      .get(`/song/${id}`)
      .then((res) => res.data)
      .then((data) => setSelectedSong(data))
      .catch((err) => console.warn(err));
  }

  return <></>;
}
