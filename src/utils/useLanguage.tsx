import React, { createContext, useContext, useState } from "react";

export enum LANGUAGE {
    RU = 'RU',
    EN = 'EN'
}

interface LanguageContextType {
  language: LANGUAGE;
  setLanguage: (language: LANGUAGE) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LANGUAGE>(LANGUAGE.EN);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
