import * as React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';


export default function App() {


  return (
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Products />} />
     </Routes>

  )
}
