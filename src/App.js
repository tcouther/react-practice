import './App.css';
/*
COMPONENTS

1. Expenses
  a. Expense Item
    i. Date

2. New Expenses (create)
  a. New Expense Form


*/

import ExpenseListAdd from  './Components/ExpenseListAdd.js';
import ExpenseList from './Components/ExpenseList.js';

const EXPENSELIST = [
  {"title": "Bitcoin", "amount": "24,000", "date": "2013-3-4"},
  {"title": "Ethereum", "amount": "26", "date": "2024-8-4"},
  {"title": "Shitcoin", "amount": "50", "date": "2024-9-1"}
];

function App() {
  return (
    <div className="App page-container">
      <ExpenseListAdd></ExpenseListAdd>
      <ExpenseList listdata={EXPENSELIST}></ExpenseList>
    </div>
  );
}

export default App;
