import React, { Component } from 'react'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Thunk from 'redux-thunk'

import RootReducer from './rootReducer'

import {Container} from 'native-base'
import Login from './auth/login'

const store = createStore(RootReducer,applyMiddleware(Thunk))

class RN extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login></Login>
            </Provider>
        );
    }
}

export default RN;