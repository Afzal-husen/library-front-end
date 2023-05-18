import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AddBook = () => {



    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        image: "",
        desc: ""
    })
    console.log(bookData)

    const handleAddBook = async (e) => {
        e.preventDefault()
      const url = "http://localhost:5000/api/v1/books/uploadbook";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })

        const data = await res.json()
        console.log(data) 
    }

    const handleOnChange = (e) => {
        const {value, name} = e.target

        setBookData((prevValue) => {
            return {
                ...prevValue, [name]: value
            }
        })
    }
  return (
    <Fragment>
      <Container>
        <Form>
          <Form.Group>
            <FloatingLabel label="Title">
              <Form.Control
                size="sm"
                type="text"
                name="title"
                placeholder="Enter book title..."
                onChange={handleOnChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel label="Author">
              <Form.Control
                size="sm"
                type="text"
                name="author"
                placeholder="Enter Author's name..."
                onChange={handleOnChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel label="Description">
              <Form.Control
                size="sm"
                style={{ height: "100px" }}
                as={"textarea"}
                type="text"
                name="desc"
                placeholder="Enter Author's name..."
                onChange={handleOnChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <Form.Label>Book cover</Form.Label>
            <Form.Control
              size="sm"
              type="file"
              name="image"
              accept="image/jpg, image/jpeg"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="btn btn-primary"
              type="submit"
              value={"Add"}
              onClick={handleAddBook}
            />
          </Form.Group>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AddBook;
