import { createGlobalStyle } from "styled-components";

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

  .player {
    grid-area: player;
    flex: 1;
    height: 90px;
    background-color: #282828;
  }

  input:focus {
    outline: none;
  }

  hr {
    border-top: 1px solid rgba(230, 230, 230, 0.1) !important;
  }

  .noselect {
    user-select: none;
  }

`;
