import React, { Fragment, useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

const Home = () => {
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    const fetchBooks = async () => {
      const url = "http://localhost:5000/api/v1/books/allbooks";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setBooks(data.books);
    };
    fetchBooks();
  }, []);
  return (
    <Fragment>
      <Container>
        <Stack
          className="flex-lg-row align-items-center flex-sm-column"
          gap={4}>
          {books.map((book) => (
            <BookCard book={book} />
          ))}
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
