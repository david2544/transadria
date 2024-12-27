"use client";

import React, { createContext, useContext, useState } from "react";
import { dictionary, Languages } from "../i18n";

interface LanguageContextProps {
  language: Languages;
  setLanguage: (lang: Languages) => void;
  t: (key: keyof (typeof dictionary)["en"]) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLang] = useState<Languages>("ro");

  function setLanguage(lang: Languages) {
    setLang(lang);
  }

  function t(key: keyof (typeof dictionary)["en"]) {
    return dictionary[language][key];
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  return useContext(LanguageContext);
}
