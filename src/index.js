import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          theme={{ colorScheme: 'dark' }}
        >
          {' '}
          <App />
        </MantineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
