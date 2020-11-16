import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Manager from "./components/manager";

function App() {
  return (
    <div className="App">
      <Manager/>
    </div>
  );
}

export default App;
