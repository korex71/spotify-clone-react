import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  padding: 7px 9px;
  padding-right: 14px;
  border-radius: 8px;

  &:hover {
    background: #2a2a2a;
    .song-author {
      color: white !important;
      letter-spacing: 0.2px;
    }

    .song-image {
      svg {
        display: block;
      }
    }

    .song-like {
      svg {
        display: block;
      }
    }
  }

  .song-image {
    position: relative;

    svg {
      display: none;
      position: absolute;
      top: 20%;
      left: 35%;
    }
  }

  .song-info {
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    flex: 1;

    .song-author {
      color: #a0a0a0;
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
