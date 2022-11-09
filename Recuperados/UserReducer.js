const initialState = {
    values: []
}

const userReducer = (state = initialState, action)=> {
    switch(action.type){
        case "ACTION_01":
            return {
                values: action.value
            }
        case "ACTION_02":
            return initialState;
        default:
            return state;

    }
}

export default userReducer;