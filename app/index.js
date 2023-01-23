import App from './Components/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataContextProvider } from './data-context';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);
