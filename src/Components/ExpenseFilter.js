import React from 'react';

import './css/ExpenseFilter.css';

const ExpensesFilter = (props) => {

const handleFilterChange = (event)=>{
	const el = event.target;
	props.onFilterChange(el.options[el.selectedIndex].value);
}

return (
	<div className='expenses-filter'>
	<div className='expenses-filter__control'>
		<label>Filter by year</label>
		<select onChange={handleFilterChange}>
		<option value='2023'>2023</option>
		<option value='2022'>2022</option>
		<option value='2021'>2021</option>
		<option value='2020'>2020</option>
		<option value='2019'>2019</option>
		</select>
	</div>
	</div>
);
};

export default ExpensesFilter;