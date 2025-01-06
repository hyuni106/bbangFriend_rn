import React, { useEffect } from 'react';
import i18next from 'i18n';

import Root from 'screens/Root';
import { initializeDatabase } from 'databases';
import store from 'features';
import { Provider } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initI18n = i18next;

function App(): React.JSX.Element {
  useEffect(() => {
    initializeDatabase().catch(error => console.error('Database initialization failed:', error));
  }, []);

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
