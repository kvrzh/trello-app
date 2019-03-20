import React, { Component } from 'react';

import TrelloApp from '@/containers/TrelloApp';

import {BrowserRouter} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <TrelloApp />
        </BrowserRouter>
    );
  }
}

export default App;
