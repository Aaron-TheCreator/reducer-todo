export const initialState = [{
    item: "wash dishes",
    completed: false,
    id: 45678987654
}, {
    item: "take out trash",
    completed: false,
    id:098765456786
}];

export const mainReducer = (state, action) => {
    console.log(`bk: mainReducer.js: state,action: `, state, action);

    switch (action.type) {
        default:
            return state;
    }
}