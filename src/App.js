import Product from './components/Product';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Router, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dreamflights</h1>
      <Navbar/>
      <Products/>
      <Product/>
    </div>
  );
}

export default App;
