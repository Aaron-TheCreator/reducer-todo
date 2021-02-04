import React, { useState, useReducer } from "react";
import { itemReducer } from "../reducers/itemReducer";

// const
const Item = (props) => {
    const [state, dispatch] = useReducer(itemReducer, initialTitleState);

    const handleClick = (e) => {
        props.toggleComplete(props.item.id);
    };

   return (
        <div
            onClick={handleClick}
            className={`item${props.item.completed ? " completed" : ""}`}>
                <p>

                </p>
            {/* <p>{props.todos.item}</p> */}
        </div>
   );
};

export default Item;