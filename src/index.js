import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import Demo1 from '@/components/Demo1'
import * as serviceWorker from './serviceWorker'
// import CommentList from './components/CommentList'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Demo1 />, document.getElementById('root'))
// ReactDOM.render(<CommentList />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
