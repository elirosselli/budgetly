import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function NewExpense() {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    currency: 'UYU',
  });
  const navigate = useNavigate();

  const createExpense = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/expenses/', { ...formData, date: new Date() });
    navigate('/');
  };

  const onInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div>
      <form onSubmit={createExpense}>
        <label htmlFor="description">
          Description
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={(event) => onInputChange('description', event.target.value)}
          />
        </label>

        <label htmlFor="amount">
          Amount
          <input
            id="amount"
            value={formData.amount}
            onChange={(event) => onInputChange('amount', event.target.value)}
          />
        </label>

        <label htmlFor="currency">
          Currency
          <select
            id="currency"
            value={formData.currency}
            onChange={(event) => onInputChange('currency', event.target.value)}
          >
            <option value="UYU">$</option>
            <option value="USD">US$</option>
          </select>
        </label>
        <button type="submit"> Create</button>
      </form>
    </div>
  );
}

export default NewExpense;
