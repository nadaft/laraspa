import './bootstrap';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './router';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    <ToastContainer />
  </Provider>
);
