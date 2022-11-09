const initialState = {
    users : {}
}

const userReducer = (state = initialState, action)=> {
    switch (action.type){
        case "ACTION_01":
            return {
                users : action.value
            }
        default:
            return state;
    }

}

export default userReducer;