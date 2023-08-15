import React from "react";

import './ExpensesFilter.css';

const ExpensesFilter=(props)=>{
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    };
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="">Filter By Year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="2023">2028</option>
                <option value="2024">2027</option>
                <option value="2025">2026</option>
                <option value="2026">2025</option>
                <option value="2027">2024</option>
                <option value="2028">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter;