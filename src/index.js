import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import presentInputReducer from './store/presentInput/reducer';
import authReducer from './store/auth/reducer';
import presentViewReducer from './store/presentView/reducer';
import checkoutReducer from './store/checkout/reducer';
import createSagaMiddleware from 'redux-saga';
import authSaga from './store/auth/authSaga';
import presentInputSaga from './store/presentInput/presentInputSaga';
import presentViewSaga from './store/presentView/presentViewSaga';
import checkoutSaga from './store/checkout/checkoutSaga';
import './index.css';
import 'typeface-roboto';

const reducers = combineReducers({
    auth: authReducer,
    presentInput: presentInputReducer,
    presentView: presentViewReducer,
    checkout: checkoutReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const authSagaMiddleware = createSagaMiddleware();
const presentInputSagaMiddleware = createSagaMiddleware();
const presentViewSagaMiddleware = createSagaMiddleware();
const checkoutSagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(authSagaMiddleware, 
    presentInputSagaMiddleware, presentViewSagaMiddleware, checkoutSagaMiddleware));

const store = createStore(reducers, enhancer);

authSagaMiddleware.run(authSaga);
presentInputSagaMiddleware.run(presentInputSaga);
presentViewSagaMiddleware.run(presentViewSaga);
checkoutSagaMiddleware.run(checkoutSaga);

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
