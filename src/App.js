import './App.css';
import ExpenseList from './Components/ExpenseList.js';

const EXPENSELIST = [
  {"title": "Bitcoin", "amount": "204.00", "date": new Date(2022,1,20)},
  {"title": "Ethereum", "amount": "56.50", "date": new Date(2022,5,10)},
  {"title": "Stacks", "amount": "550.00", "date": new Date(2022,12,25)}
];

function App() {
  return (
    <div className="App page-container">
      <h1>My Crypto Expense List</h1>
      <ExpenseList listdata={EXPENSELIST}></ExpenseList>
    </div>
  );
}

export default App;
