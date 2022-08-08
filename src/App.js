import React from 'react'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginScreen from './screen/loginScreen/index'
import Resultpage from './components/Resultcomponent/result'
import PreliminaryinformationComponent from './screen/preliminaryScreen/index'
import RegisterphoneComponent from './screen/registerphoneScreen/index'
import InformationComponent from './components/InformationComponent/index'

function App() {

  // console.
  return (
        <Router>
          <Routes>
              <Route path="/" element={<LoginScreen />} />
              <Route path="/preliminary" element={<PreliminaryinformationComponent />}/>              
              <Route path="/information" element={<InformationComponent />}/>
              <Route path="/verifyphone" element={<RegisterphoneComponent />}/>
              <Route path="/resultpage" element={<Resultpage />}/>
          </Routes>
        </Router>
  );
}

export default App;
