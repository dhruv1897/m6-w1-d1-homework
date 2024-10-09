import React, { component } from "react";
import Home from "./Home"
import { Route, Routes, Route } from "react-router-dom";
import InventoryList from "./InventoryList"
import InventoryEdit from "./InventoryEdit"; 
import './App.css';

class App extends Component { // Ensured class component declaration is correct
  render() {
    return (
      <Router>
        <Routes>
          {/* Corrected syntax for Routes and Route elements */}
          <Route path='/' element={<Home />} /> 
          <Route path='/inventories' element={<InventoryList />} />
          <Route path='/inventories/:id' element={<InventoryEdit />} />
        </Routes>
      </Router>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
