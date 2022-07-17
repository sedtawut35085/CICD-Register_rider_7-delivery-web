import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './components/Home'
import LoginComponent from './components/LoginComponent'
import callbackpage from './components/Login_components/authcallback'
import resultpage from './components/Login_components/result'
import PreliminaryinformationComponent from './components/PreliminaryinformationComponent/index'
import confirmcodeComponent from './components/Login_components/confirmcode'
import VerifyphoneComponent from './components/VerifyphoneComponent/index'
import signinwithemail from './components/Login_components/signinwithemail'
// import test from './components/Login_components/test'
// import { AuthProvider } from './components/Login_components/Auth'

function App() {

  // console.
  return (
        <Router>
          <Switch>
              <Route exact path="/" component={LoginComponent} />
              <Route exact path="/confirmcode" component={confirmcodeComponent}/>
            {/* <AuthProvider> */}
              <Route exact path="/callback" component={callbackpage}/>
              <Route exact path="/signup" component={PreliminaryinformationComponent}/>
              <Route exact path="/resultpage" component={resultpage}/>
            {/* </AuthProvider> */}
          </Switch>
        </Router>
  );
}

export default App;
