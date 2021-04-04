import { ChangeEvent, createContext, useEffect, useState } from 'react';
import { eventLayer, EventType } from 'utils/event.layer';

export const LangaugeContext = createContext({
  language: 'pt-br',
  possibleLanguages: [] as {label: string; value:string}[],
  changeLanguage: (() => {}) as (ev: ChangeEvent<HTMLSelectElement>) => void
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

  const changeLanguage = (ev: ChangeEvent<HTMLSelectElement>) => {
    const lang = ev.target.value;
    eventLayer.emit(EventType.LANG_CHANGE, lang);
  };

  return {
    language,
    possibleLanguages,
    changeLanguage
  };
};
