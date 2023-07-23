import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

function ExpensesList({items})
{
    let expensesContent = <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
    if (items.length === 0) {
        return expensesContent;
    }
    return (
        <ul className="expenses-list">{
        items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        </ul>
      );
}

export default ExpensesList;