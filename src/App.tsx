import { useEffect, useRef } from 'react';
import './App.css';
import AppRoutes from './navigation/Routes';
import { useAuth } from './context/authContext';

// Keycloak Configuration Object
const keyCloakConfig = {
  realm: "myrealm",              // Your Keycloak realm name
  clientId: "myclient",          // Client ID defined in the Keycloak client settings
  url: "http://localhost:8080",  // Keycloak server URL (auth server endpoint)
  idpHint: "auth0"               // Optional: Used for pre-selecting an Identity Provider (like Auth0)
};


function App() {
  const { init, isInitialized, keycloakLoading, isAuthenticated } = useAuth();
  const keycloakInit = useRef(false);

  useEffect(() => {
    if (keycloakInit.current) {
      return;
    }
    // ref for limiting infinite loading
    keycloakInit.current = true;
    init(keyCloakConfig);
  }, [init]);

  if (!isInitialized && keycloakLoading) {
    return <div>Loading......</div>
  }

  if (!isAuthenticated) {
    return <div>Not Authenticated</div>
  }

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
