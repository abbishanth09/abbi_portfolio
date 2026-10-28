import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </LazyMotion>
  </React.StrictMode>
);
