import styled from "styled-components";

export const Container = styled.div`
  * {
    outline: none;

    &:focus {
      outline: none;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    padding: 10px 0;
    flex-direction: column;

    input {
      padding: 10px;
    }

    button {
      padding: 8px;
    }
  }
`;
