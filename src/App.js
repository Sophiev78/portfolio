import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./pages/Portfolio";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<Portfolio/>}/>
            </Routes>
        </BrowserRouter>
    )
  
}

export default App;
