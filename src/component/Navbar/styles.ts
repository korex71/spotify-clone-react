import styled from "styled-components";

export const Nav = styled.div`
  grid-area: navbar;
  background-color: rgba(0, 0, 0, 0.8);
  width: 230px;
  min-height: 0;
  flex: 1;

  .navbar-nav .nav-item a:hover,
  .root-list-item:hover,
  .playlist-scroll li a:hover,
  .navbar-footer a:hover {
    opacity: 1;
  }

  .navbar-nav {
    padding: 0 8px;
  }

  .navbar-nav .nav-item a {
    border-radius: 4px;
    padding: 0 16px;
    height: 40px;
    color: #fff;
    opacity: 0.6;
    font-weight: 500;
  }

  .navbar-nav .nav-item a span {
    margin-left: 16px;
  }

  .navbar-nav .nav-item.active a {
    background-color: #282828;
    opacity: 1;
  }

  .navbar-nav .nav-item i {
    font-size: 14px;
    margin-right: 16px;
  }

  .root-list {
    flex: 1;
    min-height: 0;
  }

  .root-list .root-list-header h2 {
    font-size: 0.7em;
    font-weight: 700;
    line-height: 16px;
    color: #b3b3b3;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-left: 24px;
  }

  .root-list-item {
    font-size: 14px;
    padding: 5px 24px 5px 24px;
    color: #fff;
    opacity: 0.6;
    font-weight: 500;
    cursor: pointer;
  }

  .root-list-item span {
    align-self: center;
  }

  .root-list-icon {
    width: 32px;
    height: 32px;
    background-color: #fff;
    margin-right: 16px;
  }

  .root-list-icon.heart {
    background: linear-gradient(135deg, #450af5, #c4efd9);
  }

  .root-list-divider {
    margin: 8px 24px 8px 24px;
    background-color: #282828;
    border: none;
    height: 1px;
  }

  .playlist-scroll {
    padding: 8px 24px !important;
  }

  .playlist-scroll li a {
    font-size: 14px;
    color: #fff;
    opacity: 0.6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    height: 32px;
  }

  .navbar-footer {
    background-color: #000;
  }

  .navbar-footer a {
    padding: 5px 24px;
    color: #fff;
    opacity: 0.6;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
  }

  .spotify-logo {
    color: #1db954;
    padding: 0 3em;
    padding-left: 1.9em;
  }
`;
