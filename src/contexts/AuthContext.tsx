import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react";
import { signInWithGoogle } from "../apix";

interface IUserData {
  id: string | null;
  name: string | null;
  photoURL: string | null;
}

interface IContextData {
  setUser: Dispatch<SetStateAction<IUserData>>;
  handleLoginGoogle: () => Promise<void>;
  user: IUserData;
}

interface IProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IContextData);

export default function ContextProvider({ children }: IProps) {
  const [user, setUser] = useState({} as IUserData);

  async function handleLoginGoogle() {
    let result = await signInWithGoogle();

    if (!result) {
      throw new Error("Google authentication failed.");
    }

    const userData = result.user;

    const parsedUser = {
      id: userData ? userData.uid : null,
      name: userData ? userData.displayName : null,
      photoURL: userData ? userData.photoURL : null,
    };

    setUser(parsedUser);
  }

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        handleLoginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useProvider = (): IContextData => useContext(AuthContext);
