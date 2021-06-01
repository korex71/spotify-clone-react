import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react";

interface IContextData {
  hello: string;
  hi: string;
  setHi: Dispatch<SetStateAction<string>>;
}

interface IProps {
  children: ReactNode;
}

const AppContext = createContext({} as IContextData);

export default function ContextProvider({ children }: IProps) {
  const [hi, setHi] = useState("");

  return (
    <AppContext.Provider
      value={{
        hello: "world",
        hi,
        setHi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useProvider = () => useContext(AppContext);
