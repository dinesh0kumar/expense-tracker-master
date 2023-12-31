import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {

    // const [enteredTitle,setEnteredTitle]=useState('');
    // const [enteredAmount,setEnteredAmount]=useState('');
    // const [enteredDate,setEnteredDate]=useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });

    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        let newData = {
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        }
        setUserInput(newData);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min='2019-01-01' max='2028-12-31' value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
export default ExpenseForm;