import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ExpenseContainer from './Components/ExpenseContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/home">Home</Link><br />
        <Link to="/expense">Expense</Link>

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
