import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom'
import {
  Demo,
  Logo,
  ErrorBoundary
} from "components"

const App = () => {
  return (
    <Router basename='/'>
      <ErrorBoundary>
        <NavLink to='/demo'>Demo</NavLink>
        <NavLink to='/logo'>logo</NavLink>
        <Switch>
          <Route path='/demo' component={Demo} />
          <Route path='/logo' component={Logo} />
        </Switch>
      </ErrorBoundary>
    </Router>
  )
}


export default App