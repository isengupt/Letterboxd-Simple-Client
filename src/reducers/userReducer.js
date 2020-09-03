const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "LIST_USERS":
            return {...state, users: action.payload};
      
        case "SEARCH_MOVIE":
            
            console.log(action.payload)
         
            return {...state, users: action.payload};
        case "ADD_USER":
            return {...state, userId: action.payload};
        default:
            return state;
        }
}

export default userReducer;