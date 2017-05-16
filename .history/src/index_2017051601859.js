//These two should always be included React and the render function from react-dom
import React from 'react';
import ReactDOM from 'react-dom';

import LiveSearch from './components/live-search';
import './index.css';
import peaks from './peaks.json';

//The render function will always need Data and location
ReactDOM.render(
  <LiveSearch characters={peaks} />,
  document.getElementById('root');
)