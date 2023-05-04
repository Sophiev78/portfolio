import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./pages/Portfolio";
import MotionAvion from './pages/MotionAvion';
import MotionRespiration from './pages/MotionRespiration';
import MotionVille from './pages/MotionVille';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/motionAvion" element={<MotionAvion/>}/>
                <Route path="/motionVille" element={<MotionVille/>}/>
                <Route path="/motionRespiration" element={<MotionRespiration/>}/>
            </Routes>
        </BrowserRouter>
    )
  
}

export default App;
