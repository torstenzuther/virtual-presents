import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import presentInputReducer from './store/presentInput/reducer';
import authReducer from './store/auth/reducer';
import createSagaMiddleware from 'redux-saga';
import authSaga from './store/auth/authSaga';
import presentInputSaga from './store/presentInput/presentInputSaga';

const reducers = combineReducers({
    auth: authReducer,
    presentInput: presentInputReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const authSagaMiddleware = createSagaMiddleware();
const presentInputSagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(authSagaMiddleware, presentInputSagaMiddleware));

const store = createStore(reducers, enhancer);

authSagaMiddleware.run(authSaga);
presentInputSagaMiddleware.run(presentInputSaga);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
