import { createContext, useEffect, useState } from 'react';
import { eventLayer, EventType } from 'utils/event.layer';

export const LangaugeContext = createContext({
  language: 'pt-br',
  possibleLanguages: []
});

export const useLanguage = () => {
  const [language, setLanguage] = useState('');
  const [possibleLanguages, setPossibleLanguages] = useState([]);

  useEffect(() => {
    const observer = eventLayer.on(EventType.LANG_CHANGE, (lang: string) => {
      setLanguage(lang);
    });
    return () => {
      eventLayer.off(observer);
    };
  }, [language]);
  
  return {
    language,
    possibleLanguages
  };
};
