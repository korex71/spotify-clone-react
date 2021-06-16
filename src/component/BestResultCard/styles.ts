import styled from "styled-components";

export const Container = styled.div`
  color: white;
  padding: 18px;
  border-radius: 6px;
  background: #181818;
  transition: 0.4s ease background;

  &:hover {
    background: #2a2a2a;

    .song-play {
      opacity: 1;
    }
  }

  div.song-info span:nth-child(2) {
    border-radius: 20px;
    letter-spacing: 1px;
    font-weight: bolder;
    background: #0e0c0c;
  }

  .song-play {
    background-color: #1db954;
    align-self: center;
    margin-right: 15px;
    border-radius: 50%;
    opacity: 0;
    transition: 0.3s ease all;
    box-shadow: 22px 30px 35px -4px rgba(0, 0, 0, 0.5);
    padding: 0.7em 0.8em;

    &:hover {
      padding: 0.9em 1em;
    }
  }

  .song-image {
    img {
      box-shadow: 12px 15px 37px -6px rgba(0, 0, 0, 0.5);
    }

    svg {
      display: none;
      position: absolute;
      top: 39%;
      left: 39%;
    }
  }

  .song-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 1em;
    margin-left: 0.7em;

    .song-author {
      color: #a0a0a0;
      white-space: break-spaces;
    }
  }

  .song-like {
    padding: 5px 20px;
    align-self: center;
    svg {
      color: white;
      display: none;
    }
  }

  .song-duration {
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    color: #a0a0a0;
    align-self: center;
  }
`;
