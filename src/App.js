import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginScreen from './screen/loginScreen/index'
import PreliminaryScreen from './screen/preliminaryScreen/index'
import RegisterphoneScreen from './screen/registerphoneScreen/index'
import InformationScreen from './screen/informationScreen/index'
import LoginemailScreen from './screen/loginemailScreen/index'
import * as routeconstant from './constant/routeconstant'

function App() {
  return (
        <Router>
          <Routes>
              <Route path={routeconstant.RouteContent.login} element={<LoginScreen />} />
              <Route path={routeconstant.RouteContent.preliminary} element={<PreliminaryScreen />}/>  
              <Route path={routeconstant.RouteContent.verifyphone} element={<RegisterphoneScreen />}/>            
              <Route path={routeconstant.RouteContent.information} element={<InformationScreen />}/>
              <Route path={routeconstant.RouteContent.loginemail} element={<LoginemailScreen />}/>
          </Routes>
        </Router>
  );
}

export default App;
