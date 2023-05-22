import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ colorScheme: 'dark' }}
      >
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
// basename = 'goit-react-hw-08-phonebook'
