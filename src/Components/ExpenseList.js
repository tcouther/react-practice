import ExpenseListItem from './ExpenseListItem';

export default function ExpenseList( props ) {
    return (
        <div className="expense-list-container" role="table">
            <div className="expense-list-head" role="rowheader">
                <div id="expense-heading-title" className="expense-list-item-column" role="cell">Title</div>
                <div id="expense-heading-amount" className="expense-list-item-column" role="cell">Amount</div>
                <div id="expense-heading-date" className="expense-list-item-column" role="cell">Date</div> 
            </div>
            <ul className="expense-list">
                {props.listdata.map((item,key)=>{
                    return <ExpenseListItem key={key} title={item.title} amount={item.amount} date={item.date} />
                })}
            </ul>
        </div>
    );
}
