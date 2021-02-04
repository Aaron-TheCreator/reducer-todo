export const SET_COMPLETE = "SET_COMPLETE";
export const initialItemState = {
    todoItem: {}
}

export const itemReducer = (state, action) {
    console.log(`ab: mainReducer.js: state,action: `, state, action);

    switch (action.type) {
        case SET_COMPLETE:
            return {
                ...state,
                    todoList: state.todoList.map( (item) => {
                        if (item.name === state. ) {

                        };
            }
        default:
            return state;
    }
};

// case SET_COMPLETE:
//     return {
//         ...state,
//         todoList: state.todoList.map( (item) => {
//             if (item.id === )
//         })
//     } 