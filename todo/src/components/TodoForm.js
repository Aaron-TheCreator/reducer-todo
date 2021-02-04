import React, { useState, useReducer } from "react";
import { initialFormState, formReducer, SET_TODO, TOGGLE_EDITING } from "../reducers/Reducer";


// what is a reducer?
//   1. reducer is a function that takes 2 arguments: (state={}, action={})
//   2. reducer will then, based on the action, create a new state from existing state
//   3. if the reducer is not interested in the action, it returns the existing state
//   4. reducer will return the new state

//   define action:
//   1. object that has a required `type` key
//   2. object that has an optional `payload` key (doesn't need to be called payload)

const TodoForm = (props) => {
    const [newTodoText, setNewTodo] = useState();
    const [state, dispatch] = useReducer(formReducer, initialFormState); 


    const handleChanges = (e) => {
        setNewTodo(e.target.value);
        
    };

    return (
        <div>
            {!state.editing ? (
                <div className="add-todo-button" >
                    <button
                        onClick={() => {
                            dispatch({ type: TOGGLE_EDITING});
                        }}
                        >
                            Add Todo
                        </button>
                </div>
            ) : (
                <div className="form-cont">
                    <form
                        onSubmit={(e) => {
                            e.preventdefault();
                            dispatch({type: TOGGLE_EDITING});
                            dispatch({
                                type: SET_TODO,
                                payload: newTodoText
                            })
                        }}>
                        <input
                            className="add-todo-input"
                            type="text"
                            name="newTodoText"
                            value={newTodoText}
                            onChange={handleChanges}
                            placeholder="What do you need TO DO?"
                        /> 
                        <input 
                            type="submit"
                            className="form-submit"
                        />   

                    </form>
                </div>
            )

            }
        </div>
    );

};

export default TodoForm;