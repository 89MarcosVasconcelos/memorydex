import { useState, createContext } from "react";
import { fakeAuthProvider } from "../../services/auth";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // Defina um estado para o usuário
  const [user, setUser] = useState(null);

  const signin = (newUser, callback) => {
    fakeAuthProvider.signin(() => {
      // Atribua user ao estado que você criou acima
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback) => {
    fakeAuthProvider.signout(() => {
      // Limpe o valor do usuário
      setUser(null);
      callback();
    });
  };

  // Disponibilize o user e as funções de signin e signout para que possam
  // ser acessados em qualquer lugar da aplicação
  const value = { user, signin, signout };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
