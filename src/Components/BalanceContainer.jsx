import React from 'react';
import '../Index.css';
import CurrentItem from './CurrentItem';

function BalanceContainer(props) {
  const { expense } = props;
  let income = 0;
  let expenses = 0;

  expense.forEach((item) => {
    const { amount } = item;
    if (amount > 0) {
      income += parseInt(amount);
    } else {
      expenses += parseInt(amount);
    }
  });

  return (
    <>
      <div className='balance-container'>
        <CurrentItem title="income" amount={income} type="income" />
        <CurrentItem title="expense" amount={expenses} type="expense" />
        <CurrentItem title="balance" amount={income + expenses} type="balance" />
      </div>
    </>
  );
}

export default BalanceContainer;
