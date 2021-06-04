import styled, { createGlobalStyle } from "styled-components";

interface IActiveProps {
  active: boolean;
}

export default createGlobalStyle`
body {
  background-color: #121212;
  overflow-x: hidden;
  user-select: none;
  font-family: "Roboto", sans-serif;
}

a.active {
  background-color: #282828;
  opacity: 1;
}

.color-default {
  color: #fff;
  opacity: .6;
}

a {
  text-decoration: none !important;
}

button {
  outline: none !important;
  box-shadow: none;
}

.spinner-border{
  display: inline-block;
  width: 3rem;
  height: 3rem;
  vertical-align: text-bottom;
  border: .25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border .75s cubic-bezier(0.78, 0.33, 0.11, 0.6) infinite;
  animation: spinner-border .75s cubic-bezier(0.78, 0.33, 0.11, 0.6) infinite;
}

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 100%, .3);
}

.nav-bar .navbar-nav .nav-item a:hover,
.root-list-item:hover,
.playlist-scroll li a:hover,
.navbar-footer a:hover {
  opacity: 1;
}

#root {
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
      "navbar main-view main-view"
      "player player player";
}

.nav-bar {
  grid-area: navbar;
  background-color: rgba(0, 0, 0, .8);
  width: 230px;
  min-height: 0;
  flex: 1;
}

.top-bar {
  grid-area: main-view;
  height: 60px;
  z-index: 2;
}

.main {
  grid-area: main-view;
  flex: 1;
  height: 100%;
  min-height: 0;
  overflow-y: scroll;
}

.main .margin-top {
  height: 60px;
  position: sticky;
  top: 0;
}

.main .main-container {
  padding: 16px 32px;
  flex: 1;
  min-height: 0;
}

#header #header-overlay {
  background-color: #000;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: background-color .25s;
  z-index: -1;
}

.player {
  grid-area: player;
  flex: 1;
  height: 90px;
  background-color: #282828;
}


.nav-bar-header .logo {
  width: 131px;
  max-height: 40px;
}

.nav-bar .navbar-nav {
  padding: 0 8px;
}

.nav-bar .navbar-nav .nav-item a {
  border-radius: 4px;
  padding: 0 16px;
  height: 40px;
  color: #fff;
  opacity: .6;
  font-weight: 500;
}

.nav-bar .navbar-nav .nav-item a span {
  margin-left: 16px;
}

.nav-bar .navbar-nav .nav-item.active a {
  background-color: #282828;
  opacity: 1;
}

.nav-bar .navbar-nav .nav-item i {
  font-size: 14px;
  margin-right: 16px;
}

.root-list {
  flex: 1;
  min-height: 0;
}

.root-list .root-list-header h2 {
  font-size: .7em;
  font-weight: 700;
  line-height: 16px;
  color: #b3b3b3;
  text-transform: uppercase;
  letter-spacing: .16em;
  margin-left: 24px;
}

.root-list-item {
  font-size: 14px;
  padding: 5px 24px 5px 24px;
  color: #fff;
  opacity: .6;
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
  opacity: .6;
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
  opacity: .6;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
}

.top-bar header {
  padding: 16px 48px 16px 32px;
}

.top-bar header .icons-action-left button {
  border: none;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}

.top-bar .btn-upgrade {
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

.top-bar .btn-upgrade:hover {
  transform: scale(1.05);
}

.top-bar .menu:hover>.dropdown-menu,
.top-bar .menu:hover>button {
  display: block;
  background-color: #282828;
}

.top-bar .menu button {
  border-radius: 23px;
  height: 32px;
  border: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}

.top-bar .menu button:hover {
  background-color: #282828;
}

.top-bar .menu .avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

.top-bar .menu button span {
  margin-left: 8px;
  font-weight: 700;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 110px;
}

.top-bar .menu .dropdown-menu {
  background-color: #282828;
  margin-top: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .1)
}

.top-bar .menu .dropdown-item {
  color: #fff;
  opacity: .6;
  padding: 3px 20px;
  line-height: 32px;
}

.top-bar .menu .dropdown-item:hover {
  color: #fff;
  background-color: #333;
}

.top-bar .menu .dropdown-menu .dropdown-divider {
  height: 0;
  border-top: 1px solid #404040;
  margin: 0;
}

.main .title {
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -.04em;
  text-transform: none;
  color: #fff;
}

.main .subtitle {
  color: #fff;
  opacity: .6;
}

.main .list {
  padding: 0px 7px;
}

.main .list .card {
  position: relative;
  padding: 20px 20px 16px;
  background-color: #282828;
  border-radius: 8px;
}

.main .list .col-12 {
  padding-left: 8px;
  padding-right: 8px;
}

.main .list .card .card-img-top {
  height: 118px;
  width: 118px;
}

.main .list .card .card-body {
  min-height: 62px;
}

.main .list .card .card-title {
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: .24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

.main .list .card .card-text {
  color: #fff;
  opacity: .6;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 4px;
}

.main .list .card .btn-play {
  position: absolute;
  right: 16px;
  bottom: 16px;
  opacity: 0;
  margin: 0;
  padding: 0;
}

.main .list .card:hover>.btn-play {
  opacity: 1;
}

.main .list .card .btn-play button {
  color: #fff;
  background-color: #1db954;
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  padding: 0;
  font-size: 12px;
}

.main .view-more {
  color: #fff;
  opacity: .6;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.main .view-more:hover {
  text-decoration: underline !important;
}

input:focus {
  outline: none;
}

.custom-search {    
  color: #000000;
  background-color: white;
  padding: 5px 12px;
  border-radius: 12px;
  border: none;
  width: 18em;
}

.spotify-logo {
  color: white;
  padding: 0 3em;
    padding-left: 1.9em;
}

hr {
  border-top: 1px solid rgba(230, 230, 230, 0.1) !important;
}

.noselect {
  user-select: none;
}

`;

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
