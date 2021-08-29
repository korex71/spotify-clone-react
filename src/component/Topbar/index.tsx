import { useContext, useState } from "react";
import { SearchWrapper, Bar as Container } from "./styles";
import * as Feather from "react-feather";
import { AppContext } from "../../contexts/AppContext";
import { useHistory } from "react-router-dom";

function Topbar() {
  const { inputSearch, setInputSearch, handleSearch, user, setUser } =
    useContext(AppContext);

  const [dropdown, setDropdown] = useState(false);

  const history = useHistory();

  const handleLogout = () => {
    setUser(null);

    history.push("/");
  };

  return (
    <Container dropdown={dropdown}>
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
          <SearchWrapper active={true}>
            <Feather.Search width="22" strokeWidth="1" />
            <input
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              type="text"
              placeholder="Artistas, músicas ou podcasts"
            />
          </SearchWrapper>
        </div>
        <div>
          <div className="dropdown menu">
            <button
              type="button"
              className="d-flex align-items-center justify-content-center"
              data-toggle="dropdown"
              onClick={() => setDropdown(!dropdown)}
            >
              <img
                src={(user && user.photoURL) || ""}
                alt="User"
                className="user-image"
              />
              {/* <Feather.User width="16" height="16" /> */}
              <span>{(user && user.name) || "User"}</span>
              <Feather.ChevronDown width="16" className="ml-2" />
            </button>
            <div className="dropdown-menu p-0">
              <a href="#3" className="dropdown-item">
                Configurações
              </a>
              <a href="#2" className="dropdown-item">
                Perfil
              </a>
              <div className="dropdown-divider" />
              <a
                href="#logout"
                onClick={handleLogout}
                className="dropdown-item"
              >
                Sair
              </a>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}

export default Topbar;
