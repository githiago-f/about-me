import React from 'react';
import Theme from './theme';
import { Home } from 'pages/Home';
import { LangaugeContext, useLanguage } from 'context/language.context';

const App = () => {
  const langHooksValue = useLanguage();
  return (
    <React.StrictMode>
      <LangaugeContext.Provider value={langHooksValue}>
        <Theme data-language={langHooksValue.language}>
          <Home />
        </Theme>
      </LangaugeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
