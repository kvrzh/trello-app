import React, { Component } from 'react';

import TrelloApp from '@/containers/TrelloApp';

import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory } from "history";

import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
            <TrelloApp />
        </BrowserRouter>
    );
  }
}

export default App;
