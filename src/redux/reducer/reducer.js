let initialState = {
    count: 0,
    id: "",
    password: "",
}

function reducer(state = initialState, action) {
    if (action.type === "INCREMENT") {
        return {
            ...state, count: state.count + action.payload.num,
        }
    }

    if (action.type === "LOGIN") {
        return {
            ...state,
            id: action.payload.id,
            password: action.payload.password,
        }
    }

    if (action.type === "DECREMENT") {
        return {
           ...state, count: state.count - action.payload.num,
        }
    }

    return {...state};
}

export default reducer;