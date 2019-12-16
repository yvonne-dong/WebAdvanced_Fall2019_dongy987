import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./Components/Home/Home"
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import './App.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/sec1' component={Section1} />
      <Route path='/sec2' component={Section2} />
      <Route path='/sec3' component={Section3} />
    </Switch>
  </main>
)

export default Main
