import {useState} from 'react';

export default function ExpenseListAdd(props) {
    
    const [expenseTitle,setExpenseTitle] = useState('');
    const [expenseAmount,setExpenseAmount] = useState('');
    const [expenseDate,setExpenseDate] = useState('');

    const submitHandler = (event)=>{
        event.preventDefault();
        const submittedData = {
            expenseTitle,
            expenseAmount,
            expenseDate : new Date(expenseDate)
        };
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');

        props.onSubmission(submittedData);
    };

    const handleChangeExpenseTitle = (event)=>{

        setExpenseTitle(event.target.value);
    };

    const handleChangeExpenseAmount = (event)=>{

        setExpenseAmount(event.target.value);
    };

    const handleChangeExpenseDate = (event)=>{

        setExpenseDate(event.target.value);
    };

    return (
        <form className="form-container expense-list-add-form" onSubmit={submitHandler}>
            <div className="form-column">
                <label htmlFor="title">Title</label>
                <input name="title" type="text" value={expenseTitle} required onChange={handleChangeExpenseTitle} />
            </div>
            <div className="form-column">
                <label htmlFor="amount">Amount</label>
                <input name="amount" type="number" value={expenseAmount} min="0.01" step="0.01" required onChange={handleChangeExpenseAmount} />
            </div>
            <div className="form-column">
                <label htmlFor="date">Date</label>
                <input name="date" type="date" value={expenseDate} min="2018-12-31" max="2023-12-31" onChange={handleChangeExpenseDate} />
            </div>
            <div className="form-column"><button type="submit">Submit</button></div>
        </form>
    );
}
