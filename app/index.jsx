'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app.component';

ReactDOM.render(
  <Router>
    <App title="User Controller"/>
  </Router>,
  document.querySelector('#root')
)