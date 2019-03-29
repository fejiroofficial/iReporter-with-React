import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
const app = (<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>);
ReactDOM.render(app, document.getElementById('root'));
