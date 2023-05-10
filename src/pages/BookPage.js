import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookPage = ({ match }) => {
  let bookId = useParams().id; //= match.params.id;
  let [book, setBook] = useState(null);
  useEffect(() => {
    getBook();
    // eslint-disable-next-line
  }, [bookId]);

  let getBook = async () => {
    let response = await fetch(`/api/books/${bookId}/`);
    let data = await response.json();
    setBook(data);
  };

  return (
    <div>
      <h1 id="title">Title: {book?.title}</h1>
      <div id="container">
        <div
          id="content"
          style={{ width: 80 + "rem" }}
          dangerouslySetInnerHTML={{ __html: book?.content }}
        ></div>
      </div>
    </div>
  );
};

export default BookPage;
