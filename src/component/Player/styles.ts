import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  grid-area: player;
  flex: 1;
  height: 90px;
  background-color: #282828;
  color: white;

  #playb {
    align-items: center;
    background-color: #fff;
    border: none;
    color: #000;
    justify-content: center;
    position: relative;
    transition: none 33ms cubic-bezier(0.3, 0, 0.7, 1);
    transition-property: all;
    width: 0.8em;
    min-width: 0.8em;
    opacity: 1;
    padding: 10px;
    border-radius: 50%;
    height: 0.78em;
  }
`;

export const marquee = keyframes`
  from { margin-left: 0% }
  to { margin-left: -100% }
`;

export const Container = styled.footer`
  padding: 0 16px;

  .default-author {
    color: #fff;
    opacity: 0.6;
    font-size: 14px;
  }

  .cover img {
    max-width: 100px;
    max-height: 100px;
  }

  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .song:hover {
    text-decoration: underline;
  }

  .progress {
    overflow: visible;
  }

  .text span {
    color: #fff;
    opacity: 0.6;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text label {
    color: #fff;
    opacity: 1;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.015em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon {
    color: #fff;
    opacity: 0.6;
    width: 52px;
    height: 52px;
    margin: 2px;
  }

  .icon:hover {
    opacity: 1;
  }

  button {
    background: transparent;
    border: none;
  }

  .play {
    margin: -12px;
    padding: 0;
    font-size: 42px;
  }

  .play:hover {
    transform: scale(1.05);
  }

  .player-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 565px;
  }

  .player-center .player-center-control {
    width: 100%;
  }

  .progress-time {
    color: #fff;
    opacity: 0.6;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.015em;
    min-width: 40px;
    text-align: center;
  }

  .progress-bar {
    overflow: visible;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #535353;
    height: 4px;
    width: 100%;
  }

  .progress {
    background-color: #b3b3b3;
    border-radius: 2px;
    height: 4px;
    width: 70%;
  }

  .icon-right {
    color: #fff;
    opacity: 0.7;
    width: 32px;
    height: 32px;
    font-size: 16px;
    margin: 2px;
  }

  .icon:hover {
    opacity: 1;
  }

  .volume-bar {
    width: 84px;
  }

  #range-volume {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
    background: linear-gradient(
      to right,
      var(--green) 0%,
      var(--green) 100%,
      rgb(76, 76, 76) 100%,
      rgb(76, 76, 76) 100%
    );
    transition: background 450ms ease-in;
    -webkit-appearance: none;
  }

  #range-time {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
    background: linear-gradient(
      to right,
      var(--green) 0%,
      var(--green) 0%,
      rgb(76, 76, 76) 0%,
      rgb(76, 76, 76) 100%
    );
    transition: background 450ms ease-in;
    -webkit-appearance: none;
  }

  #range-time:hover {
    background: linear-gradient(
      to right,
      var(--gray) 0%,
      var(--gray) 0%,
      rgb(76, 76, 76) 0%,
      rgb(76, 76, 76) 100%
    );
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    background: white;
    border-radius: 20px;
  }

  .song {
    &:hover {
      /* animation: ${marquee} 5s linear infinite; */
    }
  }

  .marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .marquee:hover {
    animation: ${marquee} 5s linear infinite;
  }
`;
