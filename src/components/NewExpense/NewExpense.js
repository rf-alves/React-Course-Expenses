import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisible, setFormVisibility] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  const cancelExpenseDataHandler = () => {
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {!formVisible ? (
        <button
          onClick={() => {
            setFormVisibility(true);
          }}
        >
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
