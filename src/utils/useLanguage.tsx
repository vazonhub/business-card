import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export enum LANGUAGE {
    RU = 'RU',
    EN = 'EN'
}

interface Translations {
  [key: string]: string | Translations;
}

interface LanguageContextType {
  language: LANGUAGE;
  setLanguage: React.Dispatch<React.SetStateAction<LANGUAGE>>;
  t: (key: string, params?: Record<string, string | number>) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const loadTranslations = async (lang: LANGUAGE): Promise<Translations> => {
  try {
    const response = await import(`./../assets/locales/${lang.toLowerCase()}.json`);
    return response.default;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    return {};
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LANGUAGE>(LANGUAGE.EN);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadLanguage = async () => {
      setIsLoading(true);
      const newTranslations = await loadTranslations(language);
      setTranslations(newTranslations);
      setIsLoading(false);
    };

    loadLanguage();
  }, [language]);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    if (isLoading) {
      return "...";
    }

    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value === undefined) {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
    
    if (params && typeof value === 'string') {
      return Object.entries(params).reduce((result, [paramKey, paramValue]) => {
        return result.replace(`{{${paramKey}}}`, String(paramValue));
      }, value);
    }
    
    return value;
  }, [translations]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
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