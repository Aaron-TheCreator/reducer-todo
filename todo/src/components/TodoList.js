import React from "react";
import { initalListState, formReducer } from "../reducers/Reducer";
import Item from "./Item";


const TodoList = (props) => {
    // const listState = {...initialListState 
    // };
    const [state, dispatch] = useReducer(formReducer, initialListState);


    return (
        <div className="todo-list">
         {initalListState.todoList.map( (item) => {
            return (
                <Item
                    key={item.id} 
                    toggleCompleted={props.toggleCompleted}
                />
             );
         })}
         <button className="clear-btn" onClick={props.clearCompleted} >
            Clear Completed     
        </button> 
        </div>
    );

};

export default TodoList;