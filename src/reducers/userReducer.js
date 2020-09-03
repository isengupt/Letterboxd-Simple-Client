const userReducer = (state = {}, action) => {
    switch(action.type) {

        case "SEARCH_MOVIE":
            return {...state, users: action.payload};
        default:
            return state;
        }
}

export default userReducer;