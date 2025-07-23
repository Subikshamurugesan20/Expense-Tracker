import React, { useState } from 'react';
import Expenseform from './Expenseform';
import History from './History.jsx';
import { v4 as uid } from 'uuid';
import BalanceContainer from './BalanceContainer.jsx';

function ExpenseContainer() {
  const EXPENSE = [
    { id: uid(), title: "Expense1", amount: 100 },
    { id: uid(), title: "Expense2", amount: 500 }
  ];
  const [expense, setExpense] = useState(EXPENSE);

  function addExpense(title, amount) {
    setExpense([...expense, { id: uid(), title, amount }]);
  }

  function deleteExpense(id) {
    setExpense(expense.filter((exp) => exp.id !== id));
  }

  return (
    <>
      <div className='expense-container'>
        <BalanceContainer expense={expense} />
        <Expenseform addExpense={addExpense} />
        <History expense={expense} deleteExpense={deleteExpense} />
      </div>
    </>
  );
}

export default ExpenseContainer;
