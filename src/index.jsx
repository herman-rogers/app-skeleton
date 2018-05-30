import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import App from './app/App';

/* eslint-disable */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;
/* eslint-enable */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
