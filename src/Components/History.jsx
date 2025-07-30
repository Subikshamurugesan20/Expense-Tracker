import React from 'react';
import ExpenseItem from './Expenseitem';

function History(props) {
  const expenses = props.expense;

  return (
    <>
      <div className='History'>
        <h1>History</h1>
        {
          expenses.map((expense) => (
            <ExpenseItem key={expense._id} expense={expense} deleteExpense={props.deleteExpense}/>
          ))
        }
      </div>
    </>
  );
}

export default History;




















//Duplicate copy and edit function


// import React from 'react';
// import ExpenseItem from './Expenseitem';

// function History(props) {
//   const expenses = props.expense;

//   return (
//     <div className='History'>
//       <h1>History</h1>
//       {
//         expenses.map((expense) => (
//           <ExpenseItem
//             key={expense._id}
//             expense={expense}
//             deleteExpense={props.deleteExpense}
//             setItemToEdit={props.setItemToEdit}
//           />
//         ))
//       }
//     </div>
//   );
// }

// export default History;
