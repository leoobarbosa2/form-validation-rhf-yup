import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from './styles/generic/Reset';
import Base from './styles/elements/Base';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Base />
    <App />
  </React.StrictMode>
);