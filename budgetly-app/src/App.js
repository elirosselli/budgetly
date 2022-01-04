import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import ExpensesList from './containers/ExpensesList';
import NewExpense from './containers/NewExpense';

function App() {
  return (
    <Routes>
      <Route path="/new" element={<NewExpense />} />
      <Route path="/" exact element={<ExpensesList />} />
    </Routes>
  );
}

export default App;
