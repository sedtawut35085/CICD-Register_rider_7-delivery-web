import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './components/LoginComponent'
import resultpage from './components/Resultcomponent/result'
import PreliminaryinformationComponent from './components/PreliminaryinformationComponent/index'
import VerifyphoneComponent from './components/VerifyphoneComponent/index'
import PersonalinformationComponent from './components/PersonalinformationComponent/index'
// import { AuthProvider } from './components/Resultcomponent/Auth'

function App() {

  // console.
  return (
        <Router>
          <Switch>
              <Route exact path="/" component={LoginComponent} />
            {/* <AuthProvider> */}
              <Route exact path="/signup" component={PreliminaryinformationComponent}/>
              <Route exact path="/resultpage" component={resultpage}/>
              <Route exact path="/verifyphone" component={VerifyphoneComponent}/>
              <Route exact path="/personalinformation" component={PersonalinformationComponent}/>
            {/* </AuthProvider> */}
          </Switch>
        </Router>
  );
}

export default App;
