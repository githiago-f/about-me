import { LangaugeContext } from 'context/language.context';
import React, { useContext, useMemo } from 'react';

export const Language = () => {
  const {possibleLanguages, changeLanguage, language} = useContext(LangaugeContext);

  const renderOptions = useMemo(() => {
    return possibleLanguages.map((i, idx) => (
      <option 
        key={idx}
        value={i.value}
      >{i.label}</option>
    ));
  }, [possibleLanguages]);

  return (
    <select 
      name="language" 
      onChange={changeLanguage}
      title="Select your language" 
      id="language"
      className="p-1 border-gray-400 border-2 rounded-md"
      defaultValue={language}
    >
      {renderOptions}
    </select>
  );
};
