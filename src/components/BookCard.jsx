import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const BookCard = ({ book }) => {
  return (
    <Fragment>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src={book.image} height={150} width="100%" />
        <Card.Body>
          <Card.Subtitle className="mb-2 ">Title: {book.title}</Card.Subtitle>
          <Card.Subtitle className="mb-2 ">Author: {book.author}</Card.Subtitle>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>
                <Card.Text>{book.desc}</Card.Text>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default BookCard;
