import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { getCurrentTheme } from "../components/ThemeSwitcher";
const BookListPage = () => {
  const currentTheme = getCurrentTheme();
  let [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  let getBooks = async () => {
    let response = await fetch("/api/books/");
    let data = await response.json();
    console.log("DATA: ", data);
    setBooks(data);
  };
  return (
    <div className="card-group">
      {books.map((book, index) =>
        index % 4 === 0 ? (
          <div className="card-group" key={index}>
            <div
              className={
                currentTheme === "dark"
                  ? "card text-white bg-dark mb-3"
                  : "card bg-light mb-3"
              }
              style={{ width: 27 + "rem" }}
              key={index}
            >
              <div className="card-body">
                <Nav.Link href={`/books/${books[index].id}`}>
                  <h5 className="card-title">{books[index].title}</h5>
                </Nav.Link>
                <h6 className="card-subtitle mb-2 text-muted">
                  by {books[index].author}
                </h6>
                <img
                  className="card-img-top"
                  src={books[index].cover}
                  alt="Card cap"
                  style={{ width: 10 + "rem" }}
                />
              </div>
            </div>
            {books[index + 1] && (
              <div
                className={
                  currentTheme === "dark"
                    ? "card text-white bg-dark mb-3"
                    : "card bg-light mb-3"
                }
                style={{ width: 27 + "rem" }}
                key={index + 1}
              >
                <div className="card-body">
                  <Nav.Link href={`/books/${books[index + 1].id}`}>
                    <h5 className="card-title">{books[index + 1].title}</h5>
                  </Nav.Link>
                  <h6 className="card-subtitle mb-2 text-muted">
                    by {books[index + 1].author}
                  </h6>
                  <img
                    className="card-img-top"
                    src={books[index + 1].cover}
                    alt="Card cap"
                    style={{ width: 10 + "rem" }}
                  />
                </div>
              </div>
            )}
            {books[index + 2] && (
              <div
                className={
                  currentTheme === "dark"
                    ? "card text-white bg-dark mb-3"
                    : "card bg-light mb-3"
                }
                style={{ width: 27 + "rem" }}
                key={index + 2}
              >
                <div className="card-body">
                  <Nav.Link href={`/books/${books[index + 2].id}`}>
                    <h5 className="card-title">{books[index + 2].title}</h5>
                  </Nav.Link>
                  <h6 className="card-subtitle mb-2 text-muted">
                    by {books[index + 2].author}
                  </h6>
                  <img
                    className="card-img-top"
                    src={books[index + 2].cover}
                    alt="Card cap"
                    style={{ width: 10 + "rem" }}
                  />
                </div>
              </div>
            )}
            {books[index + 3] && (
              <div
                className={
                  currentTheme === "dark"
                    ? "card text-white bg-dark mb-3"
                    : "card bg-light mb-3"
                }
                style={{ width: 27 + "rem" }}
                key={index + 3}
              >
                <div className="card-body">
                  <Nav.Link href={`/books/${books[index + 3].id}`}>
                    <h5 className="card-title">{books[index + 3].title}</h5>
                  </Nav.Link>
                  <h6 className="card-subtitle mb-2 text-muted">
                    by {books[index + 3].author}
                  </h6>
                  <img
                    className="card-img-top"
                    src={books[index + 3].cover}
                    alt="Card cap"
                    style={{ width: 10 + "rem" }}
                  />
                </div>
              </div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export default BookListPage;
