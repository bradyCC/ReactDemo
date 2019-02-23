/**
 * Created by brady on 2019/1/19.
 */
import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Demo from './components/Demo'
import Demo1 from './components/Demo1'
import CommentList from './components/CommentList'
import Counter from './components/Counter'

import { Provider } from 'react-redux'
import { store } from './store/store'

const AppRouter = () => (
  <Provider store={store}>
    <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/demo" component={Demo} />
          <Route path="/demo1" component={Demo1} />
          <Route path="/commentlist" component={CommentList} />
          <Route path="/commentlist/:id" component={CommentList} />
          <Route paht="/counter" component={Counter} />
        </Switch>
    </HashRouter>
  </Provider>
)

export default AppRouter
