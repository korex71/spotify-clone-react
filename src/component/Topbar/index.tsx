import { useContext } from "react";
import * as Feather from "react-feather";
import { AppContext } from "../../contexts/AppContext";
import { SearchWrapper, Bar as TopBar } from "./styles";

// interface IUserGoogle {
//   id: string;
//   name: string;
//   photoUrl: string;
// }

function Topbar() {
  const { inputSearch, setInputSearch, handleSearch, user } = useContext(AppContext);

  return (
    <TopBar>
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
        <div className="d-flex ml-auto">
          <div className="dropdown menu ml-3">
            <button
              type="button"
              className="d-flex align-items-center justify-content-center"
              data-toggle="dropdown"
            >
              {/* <Feather.User width="16" height="16" /> */}
              <img src={user.photoURL || ""} alt="User" className="user-image" />
              <span>{user.name || "User"}</span>
              <i className="fas fa-caret-down ml-2 mr-2" />
            </button>
            <div className="dropdown-menu mt-0 p-0">
              <a href="#3" className="dropdown-item">
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
    </TopBar>
  );
}

export default Topbar;
