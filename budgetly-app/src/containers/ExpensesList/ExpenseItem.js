import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <div>
      <p>{expense.description}</p>
      <p>{expense.currency} {expense.amount}</p>
    </div>
  );
}

export default ExpenseItem;