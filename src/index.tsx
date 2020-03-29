import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { burgerBuilderReducer, BurgerState } from './store/reducers/burgerBuilderReducer'
// import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { OrderState, orderReducer } from './store/reducers/orderReducer';

export interface AppState {
    burger: BurgerState
    order: OrderState
}

const rootReducer = combineReducers({
    burger: burgerBuilderReducer,
    order: orderReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
))
// const store = createStore(
//     rootReducer,
//     devToolsEnhancer({}),
// );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
