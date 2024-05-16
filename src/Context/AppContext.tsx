import React from "react";
export type AppLocation = "en-US" | "fr-FR";

export interface AppContextIF {
  appLang: {
    lang: {
      current: string;
      default: string;
    };
    setLang: React.Dispatch<React.SetStateAction<{ current: string; default: string; }>>;
  };
  appLoc: AppLocation;
}

export const AppContext = React.createContext<AppContextIF | undefined>(undefined);
