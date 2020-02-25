import { hot } from 'react-hot-loader/root'
import React, { FC } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import 'Api/index'
import Home from 'Pages/Home'
import One from 'Pages/One'

const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
      >
        <Home />
      </Route>
      <Route
        exact
        path="/one"
      >
        <One />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default hot(App)
