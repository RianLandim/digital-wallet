import { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services";
import { useNavigation } from "@react-navigation/native";
import type { StackScreenNavigation } from "../router/stack";

type User = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  earning: number;
  earningDay: number;
  balance: number;
  cpf: string;
  username: string;
};

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

type StorageFunctionParams = {
  user: User;
  accessToken: string;
};

interface AuthContextProps {
  user: User;
  signed: boolean;
  setStorageUser: (data: StorageFunctionParams) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default function AuthContextProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [signed, setSigned] = useState(false);

  const navigator = useNavigation<StackScreenNavigation>();

  useEffect(() => {
    async function getSessionStorage() {
      const storagedUser = await AsyncStorage.getItem("@user");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
        setSigned(true);
        const token = await AsyncStorage.getItem("@token");
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    }

    getSessionStorage();
  }, []);

  function setStorageUser(data: StorageFunctionParams) {
    setUser(data.user);
    api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

    AsyncStorage.setItem("@user", JSON.stringify(data.user));
    AsyncStorage.setItem("@token", data.accessToken);

    if (data.user && data.accessToken) {
      setSigned(true);
      navigator.navigate("BottomNavigationBar");
    }
  }

  const value = useMemo(
    () => ({ user, signed, setStorageUser }),
    [user, signed]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
