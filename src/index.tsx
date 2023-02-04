import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/reset.scss'
import 'styles/globals.scss'
import AppRoutes from 'routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
