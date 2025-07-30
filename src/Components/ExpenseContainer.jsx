import React, { useState,useEffect } from 'react';
import Expenseform from './Expenseform';
import History from './History.jsx';
import { v4 as uid } from 'uuid';
import BalanceContainer from './BalanceContainer.jsx';

function ExpenseContainer() 
{
  // const EXPENSE = [
  //   { id:uid(),title:"Expense1",amount:100},
  //   { id:uid(),title:"Expense2",amount:500}
  // ];

const[expense,setExpense]=useState([])
const [loading,setLoading]=useState(true)
    //fetch
    const fetchExpenses= async()=>{
        setLoading(true)
        try {
            const response=await fetch('http://localhost:3000/expenses')
            const data=await response.json()
            setExpense(data)
        }
        catch(error) {
            console.log("failed to fetch",error)
        }
        setLoading(false)
    }
    console.log(expense)
    useEffect(() => {
        fetchExpenses();
},[])





  // const[expense, setExpense]=useState(EXPENSE);

  // function addExpense(title, amount) {
  //   setExpense([...expense,{ id:uid(),title,amount }]);
  // }
 const addExpense=async(title,amount)=>
  {
    try{
      const response=await fetch('http://localhost:3000/expenses',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({title,amount}),
      })
      if(response.ok){
        const newItem=await response.json();
        setExpense((prev)=>[...prev,newItem]);
      }else{
        console.error('Failed to add expense')

      }
    }catch(error){
      console.log('Error adding expense',error)
    }
  }


  // function deleteExpense(_id) {
  //   setExpense(expense.filter((exp)=>exp._id!=_id));
  // }
 const deleteExpense=async(id)=>{
         try{
            const response=await fetch(`http://localhost:3000/expenses/${id}`,{
            method:'DELETE'
         });
         if(response.ok){
            setExpense(expense.filter((exp)=>exp._id!==id))
         }else{
            console.error('Failed to delete expense')
         }} catch(error){
            console.error('Error in deleting expense',error)
         }
     }


  return (
    <>
      <div className='expense-container'>
        <BalanceContainer expense={expense}/>
        <Expenseform addExpense={addExpense}/>
        <History expense={expense} deleteExpense={deleteExpense}/>
        {loading && <p>loading</p>}
      </div>
    </>
  );
}

export default ExpenseContainer;








