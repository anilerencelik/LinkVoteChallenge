import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { UrlLayer } from './Context/UrlContext';
import reducer, { initialState } from './Context/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <UrlLayer initialState={initialState} reducer={reducer}>
      <App />
    </UrlLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
