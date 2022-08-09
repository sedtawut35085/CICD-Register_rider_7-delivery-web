import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginScreen from './screen/loginScreen/index'
import PreliminaryScreen from './screen/preliminaryScreen/index'
import RegisterphoneScreen from './screen/registerphoneScreen/index'
import InformationScreen from './screen/informationScreen/index'
import LogoutScreen from './components/Logoutcomponent'

function App() {
  return (
        <Router>
          <Routes>
              <Route path="/" element={<LoginScreen />} />
              <Route path="/preliminary" element={<PreliminaryScreen />}/>  
              <Route path="/verifyphone" element={<RegisterphoneScreen />}/>            
              <Route path="/information" element={<InformationScreen />}/>
              <Route path="/logout" element={<LogoutScreen />}/>
          </Routes>
        </Router>
  );
}

export default App;
