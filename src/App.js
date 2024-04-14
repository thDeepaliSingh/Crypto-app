import React from 'react'
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Coin from './pages/Coin';
import { Route, Routes } from "react-router-dom";


function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;


