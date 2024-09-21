import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Tagline } from "./components/tagline";
import { EventDetails } from "./components/Event";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tagline />} />
        <Route path="/event" element={<EventDetails/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
