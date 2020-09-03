import axios from 'axios';

export const addUser = userObj => {
    return (dispatch) => {
        axios.post('http://localhost:3001/users', userObj)
        .then(response => {
            dispatch({
                type: 'ADD_USER',
                payload: response.data
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }
}
export const searchMovie = search => {
    return (dispatch) => {
        fetch('/predict', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
      
      
            },
            body: JSON.stringify(search),
          })
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                    dispatch({
                        type: 'SEARCH_MOVIE',
                        payload: response
                    })
            })
            .catch((error) => console.log(error))
    }
}