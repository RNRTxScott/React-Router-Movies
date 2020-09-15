import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work - done
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
