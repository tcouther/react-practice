import DateDisplay from './DateDisplay';

//{formatDate(props.date)}
export default function ExpenseListItem( props ) {
    return (
        <li className="expense-list-item">
            <div>{props.title}</div>
            <div>{props.amount}</div>
            <div><DateDisplay date={props.date} /></div>
        </li>
    );
}
