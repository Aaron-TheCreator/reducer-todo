// variable to pass action type "string"
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const SET_TODO = "SET_TODO";

export const initialState = {
    display: "add thing to-do",
    todoItem: "",
    editing: false,
    todoList:[{
        name: "wash dishes",
        completed: false,
        id: 45678987654
    }, {
        name: "take out trash",
        completed: false,
        id: 49876545
    }]
};


export const formReducer = (state, action) => {
    console.log(`ab: mainReducer.js: state,action: `, state, action);

    switch (action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            };
        case SET_TODO:
            return {
                ...state,
                editing: !state.editing,
                todoList: action.payload,
        };      
        default:
            return state;
    }
};