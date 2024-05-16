import React, { useState } from "react";

import "./App.css";

import { AppRouter } from "./Router/AppRouter";
import { AppContext } from "./Context/AppContext";
import { AppLocation } from "./Context/AppContext";

function App(): JSX.Element {
  const [lang, setLang] = useState({
    current: "fr-FR",
    default: "fr-FR",
  });

  const appDefaultContext = {
    appLang: { lang, setLang },
    appLoc: "en-US" as AppLocation,
  };

  return (
    <AppContext.Provider value={appDefaultContext}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
