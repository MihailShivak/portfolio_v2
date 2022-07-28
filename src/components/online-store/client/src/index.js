import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ItemStore from './store/ItemStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    item: new ItemStore(),
  }}>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
);
