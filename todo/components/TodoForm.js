import React, { useState, useReducer } from "react";
import { initialState } from "../reducers/Reducer";


// what is a reducer?
//   1. reducer is a function that takes 2 arguments: (state={}, action={})
//   2. reducer will then, based on the action, create a new state from existing state
//   3. if the reducer is not interested in the action, it returns the existing state
//   4. reducer will return the new state

//   define action:
//   1. object that has a required `type` key
//   2. object that has an optional `payload` key (doesn't need to be called payload)

const TodoForm = (props) => {

    

};

export default TodoForm;