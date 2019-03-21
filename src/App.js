import React, { Component } from 'react';

import TrelloApp from '@/containers/TrelloApp';

import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <TrelloApp />
        </Router>
    );
  }
}

export default App;
