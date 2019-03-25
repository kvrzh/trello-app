import React, { Component } from 'react';

import TrelloApp from '@/containers/TrelloApp';

import {HashRouter} from 'react-router-dom';
import {createHashHistory } from "history";

import './App.css';

const history = createHashHistory();

class App extends Component {
  render() {
    return (
        <HashRouter history={history}>
            <TrelloApp />
        </HashRouter>
    );
  }
}

export default App;
