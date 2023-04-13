import {useState} from 'react';
import './App.css';
import ExpenseList from './Components/ExpenseList.js';
import ExpenseListAdd from './Components/ExpenseListAdd.js';
import ExpenseFilter from './Components/ExpenseFilter.js';

const EXPENSELIST = [
  {"id":"0000001", "title": "Bitcoin", "amount": "204.00", "date": new Date(2022,1,20)},
  {"id":"0000002", "title": "Ethereum", "amount": "56.50", "date": new Date(2022,5,10)},
  {"id":"0000003", "title": "Stacks", "amount": "550.00", "date": new Date(2022,12,25)}
];

function App() {

  const [filterYear,setFilterYear] = useState('');

  const addNewExpense = (enteredData)=>{

    const expenseListItem = {...enteredData, id:Math.random().toString()};
    console.log(expenseListItem);
  };

  const filterExpenses = (filterYear)=>{

    setFilterYear(filterYear);
    console.log(filterYear);
  };

  return (
    <div className="App page-container">
      <h1>My Crypto Expense List</h1>
      <ExpenseFilter onFilterChange={filterExpenses}></ExpenseFilter>
      <ExpenseListAdd onSubmission={addNewExpense}></ExpenseListAdd>
      <ExpenseList listdata={EXPENSELIST}></ExpenseList>
    </div>
  );
}

export default App;
