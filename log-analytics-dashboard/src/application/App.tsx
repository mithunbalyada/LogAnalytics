import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Settings } from './settings/Settings'
import { Dashboard } from './dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/settings" exact component={Settings} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
