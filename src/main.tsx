import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '~/app';
import './globals.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('no root element');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
