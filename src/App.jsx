import "./App.css";
import Login from "../src/pages/Login";
import FirstPage from "./pages/FirstPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import BioData from "./pages/BioData";
import Profile from "./pages/Profile";
import SchedulePage from "./pages/SchedulePage";
import MapPage from "./pages/MapPage";
import Map from "./pages/Map";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <>
      <Routes>
        <Route Route path="/" element={<FirstPage />} />
        <Route Route path="/login" element={<Login />} />
        <Route Route path="/signup" element={<SignUp />} />
        <Route Route path="/bio-data" element={<BioData />} />
        <Route Route path="/profile" element={<Profile />} />
        <Route Route path="/map" element={<Map />} />
        <Route Route path="/schedule" element={<SchedulePage />} />
        <Route Route path="/confirm" element={<Confirm />} />
      </Routes>
    </>
  );
}

export default App;
