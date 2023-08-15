import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">Found No Expenses</h2>
        )
    }
    console.log(props.items);

    return (
        <ul className="expenses-list">
            {
                props.items.map(expense => 
                    <ExpenseItem
                        key={expense.id}
                        item={expense}
                    />
                )
            }
        </ul>
    )
}
export default ExpensesList;