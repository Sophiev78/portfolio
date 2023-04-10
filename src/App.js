import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./pages/Portfolio";
import MotionAvion from './pages/MotionAvion';
import MotionRespiration from './pages/MotionRespiration';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/motionAvion" element={<MotionAvion/>}/>
                <Route path="/motionRespiration" element={<MotionRespiration/>}/>
            </Routes>
        </BrowserRouter>
    )
  
}

export default App;
