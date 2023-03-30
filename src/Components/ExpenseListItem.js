import DateDisplay from './DateDisplay';

export default function ExpenseListItem( props ) {
    return (
        <li className="expense-list-item" role="row">
            <div className="expense-list-item-column" role="cell" aria-describedby="expense-heading-title">{props.title}</div>
            <div className="expense-list-item-column" role="cell" aria-describedby="expense-heading-amount">${props.amount}</div>
            <div className="expense-list-item-column" role="cell" aria-describedby="expense-heading-date"><DateDisplay date={props.date} /></div>
        </li>
    );
}
