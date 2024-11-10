import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
function Expense(props) {
  return (
    <Card className="expenses">
      {props.items.map((v, index) => (
        <ExpenseItem
          title={v.title}
          amount={v.amount}
          date={v.date}
          key={index}
        />
      ))}
    </Card>
  );
}
export default Expense;
