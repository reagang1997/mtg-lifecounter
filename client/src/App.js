import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/main';
import Player from './components/Player';
import { Provider } from 'react-redux';
import store from './utils/store';


function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
