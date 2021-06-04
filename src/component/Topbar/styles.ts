import styled from "styled-components";

interface IActiveProps {
  active: boolean;
}

export const SearchWrapper = styled.div<IActiveProps>`
  background-color: white;
  border-radius: 12px;
  margin-left: 2em;
  display: ${(props: IActiveProps) => (props.active ? "flex" : "none")};
  width: 20em;

  svg {
    margin-left: 8px;
    margin-top: 4px;
    color: #525252;
  }

  input {
    flex: 1;
    padding-left: 5px;
    padding: 5px 12px;
    border: 0;
    border-radius: 12px;
  }
`;

export const Bar = styled.div`
  grid-area: main-view;
  height: 60px;
  z-index: 2;

  header {
    padding: 16px 48px 16px 32px;
  }

  header .icons-action-left button {
    border: none;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }

  #header #header-overlay {
    background-color: #000;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: background-color 0.25s;
    z-index: -1;
  }

  .btn-upgrade {
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid white;
    border-radius: 500px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1.76px;
    text-transform: uppercase;
    padding: 8px 34px;
  }

  .btn-upgrade:hover {
    transform: scale(1.05);
  }

  .menu:hover > .dropdown-menu,
  .menu:hover > button {
    display: block;
    background-color: #282828;
  }

  .menu button {
    border-radius: 23px;
    height: 32px;
    border: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .menu button:hover {
    background-color: #282828;
  }

  .menu .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }

  .menu button span {
    margin-left: 8px;
    font-weight: 700;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 110px;
  }

  .menu .dropdown-menu {
    background-color: #282828;
    margin-top: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .menu .dropdown-item {
    color: #fff;
    opacity: 0.6;
    padding: 3px 20px;
    line-height: 32px;
  }

  .menu .dropdown-item:hover {
    color: #fff;
    background-color: #333;
  }

  .menu .dropdown-menu .dropdown-divider {
    height: 0;
    border-top: 1px solid #404040;
    margin: 0;
  }
`;
