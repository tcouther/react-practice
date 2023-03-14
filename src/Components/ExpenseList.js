import ExpenseListItem from './ExpenseListItem';

export default function ExpenseList( {listdata} ) {
    return (
        <div className="expense-list-container">
            <ul className="expense-list">
                {listdata.map((item,key)=>{
                    return <ExpenseListItem key={key} title={item.title} amount={item.amount} date={item.date} />
                })}
            </ul>
        </div>
    );
}
