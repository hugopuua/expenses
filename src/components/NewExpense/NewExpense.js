import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formOpen, setFormOpen] = useState(false);

    const saveExpenseDatahandler = (expenseData) => {
        props.onAddExpense(expenseData);
        setFormOpen(false);
    }

    const cancelHandler = () => {
        setFormOpen(false);
    }

    return(
        <div className="new-expense">
            {formOpen ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={cancelHandler}></ExpenseForm>
            ) : (
                <button onClick={() => setFormOpen(true)}>Add New Expense</button>
            )}
        </div>
    )
}
export default NewExpense