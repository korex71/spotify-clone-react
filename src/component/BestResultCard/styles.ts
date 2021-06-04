import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 18px;
  border-radius: 6px;
  background: #181818;
  max-width: 25%;

  &:hover {
    background: #2a2a2a;

    .song-image {
      svg {
        display: block;
      }
    }
  }

  .song-play {
    position: absolute;
    top: 70%;
    left: 85%;
    background: #28a745;
    border-radius: 50%;
    padding: 0.6em;
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
