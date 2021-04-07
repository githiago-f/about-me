import { ChangeEvent, createContext, useEffect, useState } from 'react';
import { eventLayer, EventType } from 'utils/event.layer';
import { LanguageOption } from 'value-objects';

export const LangaugeContext = createContext({
  language: 'pt-br',
  possibleLanguages: [] as LanguageOption[],
  changeLanguage: (() => {}) as (ev: ChangeEvent<HTMLSelectElement>) => void
});

export const useLanguage = () => {
  const [possibleLanguages, setPossibleLanguages] = useState([] as LanguageOption[]);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    import('config/config.json')
      .then(i=>setPossibleLanguages(i.languages))
      .catch(console.error);

    eventLayer.on(EventType.LANG_CHANGE, (lang: string) => {
      setLanguage(lang);
    });
  }, []);

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
