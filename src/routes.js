import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EditForm from './components/EditForm'
import Dashboard from './components/dashboard/Dashboard'


export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/edit-form/:id" component={EditForm} />
  </Switch>
)