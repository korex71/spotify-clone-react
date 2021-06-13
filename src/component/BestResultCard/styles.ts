import styled from "styled-components";

export const Container = styled.div`
  color: white;
  padding: 18px;
  border-radius: 6px;
  background: #181818;

  &:hover {
    background: #2a2a2a;

    .song-image {
      svg {
        display: block;
      }
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
    height: 40px;
    align-self: center;
    margin-right: 10px;
    border-radius: 50%;
    width: 40px;

    svg {
      margin-left: 10px;
      margin-top: 8px;
    }
  }

  .song-image {
    position: relative;
    width: max-content;

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
