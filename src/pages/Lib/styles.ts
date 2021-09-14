import styled from "styled-components";

export const Container = styled.div``;

export interface PlaylistProps {
  bg: string;
}

export const PlaylistContainer = styled.div<PlaylistProps>`
  background: ${(props) => props.bg};
  margin: 2% 0 5%;
  padding: 20px;
  border-radius: 8px;
  display: flex;

  img {
    border-radius: 8px;
    box-shadow: 6px 23px 55px #000000;
  }

  div#heading {
    margin-left: 3%;

    margin-top: 2%;

    flex: 1;

    div.subtitle {
      margin-bottom: 2%;

      opacity: 1;
      span {
        color: #fff;
        font-size: 0.84em;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }

    div.title span {
      font-size: 2.4em;
      letter-spacing: 1.4px;
      font-weight: bolder;
    }

    div.info {
      margin-top: 5%;

      img {
        width: 28px;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: -8px;
      }
    }
  }

  div#heart {
    justify-content: flex-end;
    align-self: flex-end;
    span {
      display: block;
      background: green;
      color: white;
      border-radius: 50%;
      padding: 6px 10.5px;
    }
  }
`;
