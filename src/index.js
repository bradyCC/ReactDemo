import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from '@/Router.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
