import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import List from './pages/List'
import Read from './pages/Read'
// import Login from './pages/Login'
// import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Route component={Index} path={['/', '/beluga']} exact />
      <Route component={List} path={['/beluga/:service/list', '/beluga/:service/list/:number']} />
      <Route component={Read} path={['/beluga/:service/read', '/beluga/:service/read/:number']} />
      {/*
      <Route component={Read} path={['/beluga/:service/read', '/beluga/:service/read/:number']} />
      <Route component={Login} path={'/beluga/member/login'} />
      <Route component={Register} path={'/beluga/member/register'} />
      */}
    </div>
  )
}

export default App
