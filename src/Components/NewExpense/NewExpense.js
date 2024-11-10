import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const handleAddExpense = () => {
    const temp = { id: "1" };
    props.onAddExpense(temp);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleAddExpense} />
    </div>
  );
};
export default NewExpense;
