import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './components/redux/redux-store';

let _rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
    dispatch={store.dispatch.bind(store)}
    store={store}/>, document.getElementById('root'));
}

_rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  _rerenderEntireTree(state)
});

serviceWorker.unregister();
