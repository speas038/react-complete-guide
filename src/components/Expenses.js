import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  //return the list of expense items... for loop?


  return (
    <dom className="expenses">
      <ExpenseItem
        className="expense-item"
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        className="expense-item"
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        className="expense-item"
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        className="expense-item"
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </dom>
  );
}

export default Expenses;
