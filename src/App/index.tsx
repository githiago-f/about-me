import React from 'react';
import Theme from './theme';
import { Home } from 'pages/Home';

const App = () => {
  return (
    <React.StrictMode>
      <Theme>
        <Home />
      </Theme>
    </React.StrictMode>
  );
};

export default App;
