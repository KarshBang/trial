import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function Index() {
  return (
    <h1>gitpage trial</h1>
  )
}


function Hello() {
  return <p>Hello World</p>
}


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/hello/'>hello world</Link></li>
      </ul>
      <Route path='/' exact component={Index}></Route>
      <Route path='/hello/' component={Hello}></Route>
    </Router>
  )
}

export default App;
