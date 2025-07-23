import React, { useState } from 'react';
import '../Index.css';

function Expenseform(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  function handleTitlechange(e) {
    setTitle(e.target.value);
  }

  function handleAmountchange(e) {
    setAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addExpense(title, parseInt(amount));
    setTitle('');
    setAmount('');
  }

  return (
    <>
      <div className='expense-form'>
        <h3>Add Income/Expense</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='form-label'>Title</label>
            <input
              type="text"
              id='title'
              value={title}
              onChange={handleTitlechange}
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Amount</label>
            <input
              type="number"
              id='amount'
              value={amount}
              onChange={handleAmountchange}
              className='form-input'
            />
          </div>
          <button type='submit'>Add Income/Expense</button>
        </form>
      </div>
    </>
  );
}

export default Expenseform;
