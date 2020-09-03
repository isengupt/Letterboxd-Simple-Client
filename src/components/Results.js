import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'

function Results(props) {
  if (props.movies) {
    if (props.movies.length > 1) {
      return (
 <>
          {props.movies.map((item, index) => (
            <Row>
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.info.movieImage} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.info.movieDescription}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Score : {item.score}</ListGroup.Item>
                <ListGroup.Item>Year : {item.info.movieYear}</ListGroup.Item>
              </ListGroup>
            </Card>
            </Row>
          ))}
   </>
      );
    } else {
      return (
        <Row>
          {props.movies.map((error, index) => (
            <Alert key={index} variant={"danger"}>
              {error}
            </Alert>
          ))}
        </Row>
      );
    }
  } else {
    return <></>;
  }
}

export default Results;
