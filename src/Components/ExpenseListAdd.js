export default function ExpenseListAdd() {
    return (
        <form className="form-container expense-list-add-form">
            <div className="form-column">
                <label htmlFor="title">Title</label>
                <input name="title" type="text" required />
            </div>
            <div className="form-column">
                <label htmlFor="amount">Amount</label>
                <input name="amount" type="number" min="0.01" step="0.01" required />
            </div>
            <div className="form-column">
                <label htmlFor="date">Date</label>
                <input name="date" type="text" />
            </div>
            <div className="form-column"><button type="submit">Submit</button></div>
        </form>
    );
}
