import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';

function History(props) {
  const expenses = props.expense;

  return (
    <>
      <div className='History'>
        <h1>History</h1>
        {
          expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} deleteExpense={props.deleteExpense} />
          ))
        }
      </div>
    </>
  );
}

export default History;
