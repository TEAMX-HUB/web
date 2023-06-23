
import './App.css'
import Login from '../src/pages/Login';
import FirstPage from './pages/FirstPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import BioData from './pages/BioData';
import Profile from './pages/Profile';

import MapPage from './pages/MapPage';

function App() {
  

  return (
    <>
     <Routes>
      <Route Route path="/" element={<FirstPage/>}/>
      <Route Route path="/login" element={<Login/>}/>
      <Route Route path="/signup" element={<SignUp/>}/>
      <Route Route path="/bio-data" element={<BioData/>}/>
      <Route Route path="/profile" element={<Profile/>}/>
      <Route Route path="/map" element={<MapPage/>}/>
      

      
     </Routes>
    </>
  )
}

export default App
