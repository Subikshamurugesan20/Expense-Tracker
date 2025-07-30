import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ExpenseContainer from './Components/ExpenseContainer';
import Post from './Post';


function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/"><button>Home</button></Link>
        <br></br>
          <br></br>

        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/expense" element={<ExpenseContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
