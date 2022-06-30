import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
