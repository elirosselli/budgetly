import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import ExpenseItem from './ExpenseItem';
import Button from '../../components/Button';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState();
  const navigate = useNavigate()

  useEffect(async () => {
    const expenseList = await axios.get('http://localhost:3001/expenses/');
    setExpenses(expenseList.data);
  }, [])

  const onNewExpense = () => {
    console.log('new expense')
    navigate('/new');
  }

  return (
    <div>
      <Button onClick={onNewExpense}> New Expense </Button>
      <h1>My Expenses</h1>
      {expenses && expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense}/>
      ))}
    </div>
  );
}

export default ExpensesList;