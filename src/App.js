import React from 'react'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginScreen from './screen/loginScreen/index'
import PreliminaryScreen from './screen/preliminaryScreen/index'
import RegisterphoneScreen from './screen/registerphoneScreen/index'
import InformationScreen from './screen/informationScreen/index'
import Resultpage from './components/Resultcomponent/result'

function App() {

  // console.
  return (
        <Router>
          <Routes>
              <Route path="/" element={<LoginScreen />} />
              <Route path="/preliminary" element={<PreliminaryScreen />}/>              
              <Route path="/information" element={<InformationScreen />}/>
              <Route path="/verifyphone" element={<RegisterphoneScreen />}/>
              <Route path="/resultpage" element={<Resultpage />}/>
          </Routes>
        </Router>
  );
}

export default App;
