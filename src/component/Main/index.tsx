import React from "react"
import { MutableRefObject, ReactNode } from "react";

import { Wrapper } from "./styles";

interface MainProps {
  children: ReactNode;
  ref: MutableRefObject<HTMLDivElement | null>
}

function Main({ children, ref }: MainProps) {

  return (
    <Wrapper id="main" className="main d-flex flex-column" ref={ref}>
      <div className="margin-top" />
      <div className="main-container">{children}</div>
    </Wrapper>
  );
}

export default Main;
