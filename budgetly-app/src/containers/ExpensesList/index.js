import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ExpenseItem from './ExpenseItem';
import Button from '../../components/Button';
import { ModalContext } from '../../context/ModalContext';

function ExpensesList() {
  const [expenses, setExpenses] = useState();

  const { isOpen, switchModalState } = useContext(ModalContext);

  useEffect(async () => {
    const expenseList = await axios.get('http://localhost:3001/expenses/');
    setExpenses(expenseList.data);
  }, []);

  const onNewExpense = () => {
    switchModalState();
  };

  return (
    <div>
      <Button onClick={onNewExpense}> New Expense </Button>
      <h1>My Expenses</h1>
      {expenses && expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpensesList;
