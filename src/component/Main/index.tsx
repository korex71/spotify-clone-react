import React from "react"
import { ReactNode } from "react";

import { Wrapper } from "./styles";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {

  return (
    <Wrapper id="main" className="main d-flex flex-column">
      <div className="margin-top" />
      <div className="main-container">{children}</div>
    </Wrapper>
  );
}

export default Main;
