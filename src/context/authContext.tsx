import React, { useContext, useMemo, useState } from "react";
import Keycloak from "keycloak-js";

const authContextObject = React.createContext<any>({
  init: (conf: any) => { },
  isInitialized: false,
  isAuthenticated: () => false,
  keycloakLoading: false,
  logout: () => { }
});

const useAuth = () => useContext(authContextObject);

const AuthContextProvider = ({ children }: any) => {
  const [keycloak, setKeycloak] = useState<any>();
  const [isInitialized, setIsInitialized] = useState<any>(false);
  const [keycloakLoading, setKeycloakLoading] = useState(false)

  const isAuthenticated = () => keycloak?.authenticated ?? false;

  const logout = () => {
    localStorage.clear();
    keycloak.logout();
  };

  const initKeycloak = (config: any) => {
    console.log("window.location.origin", window.location.origin);

    setKeycloakLoading(true)
    const keycloakLocal = new (Keycloak as any)(config);
    keycloakLocal.init({
      onLoad: 'check-sso',
      redirectUri: window.location.origin + '/data-privacy',  // specify the route to any specific page if needed
    }).then(function (authenticated: any) {
      console.log("Kecloak initialization response:=>", authenticated)
      if (authenticated) {
        setKeycloak(keycloakLocal);

        setIsInitialized(true);
        if (keycloakLocal.token) {
          localStorage.setItem('token', keycloakLocal.token)
          setKeycloakLoading(false);
        }
      }
      else {
        // keycloakLocal.login({ idpHint: keycloakLocal.idpHint }) //to show the idp login as default
        keycloakLocal.login()
      }
      setKeycloakLoading(false);
    }).catch((err: any) => {
      setIsInitialized(false);
      setKeycloakLoading(false);
      console.log("Kecloak initialization error::=>", err)
    })
  };

  const value = useMemo(
    () => ({
      init: initKeycloak,
      isInitialized,
      isAuthenticated: isAuthenticated(),
      keycloakLoading,
      logout
    }),
    [isInitialized, isAuthenticated, initKeycloak, keycloakLoading, logout]
  );

  return (
    <authContextObject.Provider
      value={value}>
      {children}
    </authContextObject.Provider>
  );
};

export { useAuth, AuthContextProvider };