import React, { useState } from "react";
import { connect } from "react-redux";
import { searchMovie } from "../actions/userAction";
import Results from "./Results";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Search(props) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(search);

    const data = { movie: search };
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
  };
  return (
    <>
      <Row className="justify-content-md-center">
        <Form noValidate onSubmit={handleSubmit} inline>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Search movie..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-2 mr-sm-2"
              />
            </Col>
            <Col>
              <Button variant="primary" className="mb-2" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
        {/*   <form onSubmit={handleSubmit}>


        <input
        placeholder="Search Movie..."
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        
      
      <input type="submit" value="Submit" />
  
  
    </form> */}
      </Row>
    
        <Results movies={props.users} />
   
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};

export default connect(mapStateToProps, { searchMovie })(Search);
