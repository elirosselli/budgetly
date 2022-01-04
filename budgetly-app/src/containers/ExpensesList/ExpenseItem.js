import React from 'react';
import PropTypes from 'prop-types';

function ExpenseItem({ expense }) {
  return (
    <div>
      <p>{expense.description}</p>
      <p>
        {expense.currency}
        {expense.amount}
      </p>
    </div>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};

export default ExpenseItem;
