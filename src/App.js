import Wordle from "./components/Wordle";
import react, {useState, useEffect} from "react";

import './App.css';
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      
      <Wordle />
    </div>
  );
}

export default App;
