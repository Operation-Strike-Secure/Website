export interface AppContextIF {
  appLang: AppLang;
  appLoc: AppLocation;
}

interface AppLocation {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

// lang
interface AppLang {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

interface Lang {
  current: string;
  default: string;
}
