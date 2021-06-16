import styled from "styled-components";

export const Container = styled.div`
  color: white;
  border-radius: 8px;
  position: relative;

  /* #song {
    width: 90%;
  } */

  .song-actions {
    .duration {
      min-width: 2em;
      display: block;
    }
  }

  &:hover {
    background: #2a2a2a;
    .song-author {
      color: white !important;
      letter-spacing: 0.2px;
    }

    .song-image {
      svg {
        display: block !important;
      }
    }

    .song-like {
      svg {
        display: block;
        color: white;
        opacity: 1 !important;
      }
    }
  }

  .song-image {
    position: relative;

    svg {
      position: absolute;
      top: 20%;
      left: 35%;
      z-index: 1;
    }
  }

  .song-info {
    white-space: nowrap;
    flex: 1;
    margin-left: 1em;

    .song-author {
      color: #a0a0a0;
    }
  }

  .song-like {
    svg {
      color: white;
      display: hidden;
    }
  }

  .song-duration {
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    color: #a0a0a0;
    align-self: center;
  }
`;
