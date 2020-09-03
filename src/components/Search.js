import React, { useState } from "react";
import { connect } from 'react-redux';
import { searchMovie } from '../actions/userAction';



function Search(props) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(search)

      const data = {movie: search}
      props.searchMovie(data);
    

/* 
      fetch('/predict', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
  
  
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then((res) => {

          
          if (res.length === 1) {
          
            setError(res[0])
            setMovies("")
          }
          else {
            setMovies(res)
            setError("")
          }

  
        }).catch((error) => console.log(error)) */
  
    
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Movie:
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        
      </label>
      <input type="submit" value="Submit" />
      <div> { movies && movies.map((item, index) => 
       <div key={index}>
          <div>Title: {item.name}</div>
          <div>Score: {item.score}</div>
          <img src={item.info.movieImage} alt="movie_img"/>
          <div>Description: {item.info.movieDescription}</div>
          <div>Description: {item.info.movieYear}</div>

          </div>

        ) }</div>
      {error && error}
    </form>
    {props.users ? 

      props.users.map((item, index) => 
       <div key={index}>
          <div>Title: {item.name}</div>
          <div>Score: {item.score}</div>
          <img src={item.info.movieImage} alt="movie_img"/>
          <div>Description: {item.info.movieDescription}</div>
          <div>Year: {item.info.movieYear}</div>

          </div>

        )
        :
        <>
        </>
    
    
    
    }
    </>
  );
}

const mapStateToProps = state => {
  return {
      users: state.user.users,
    
  }
}


export default connect(mapStateToProps, { searchMovie })(Search);