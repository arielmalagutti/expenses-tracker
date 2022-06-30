import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((items) => {
        return (
          <>
            <ExpenseItem
              title={items.title}
              amount={items.amount}
              date={items.date}
            />
          </>
        );
      })}
    </div>
  );
}

export default Expenses;
