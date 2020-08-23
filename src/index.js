import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './Redux/sagas'
import * as serviceWorker from './serviceWorker';
import reducer from "./Redux/reducers";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer, applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);
const favouriteMovies = localStorage.getItem('favourites')
if (favouriteMovies) {

  const data = JSON.parse(favouriteMovies);
  store.dispatch({ type: 'INITIAL_FAVOURITES', data: data })
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
