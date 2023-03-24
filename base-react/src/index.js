import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

console.log(process.env.NODE_ENV);

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);