import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookPage = ({ match }) => {
  let bookId = useParams().id //= match.params.id;
  let [book, setBook] = useState(null);
  useEffect(() => {
    getBook()
  // eslint-disable-next-line
  }, [bookId]);

  let getBook = async () => {
    let response = await fetch(`/api/books/${bookId}/`);
    let data = await response.json();
    setBook(data);
  };

  // let updateCar = async() =>{
  //   fetch(`/api/cars/${carId}`,{
  //     method: "PUT",
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(car)
  //   })
  // }
  
  return (
    <div>
       {/* onChange={(e) => {setCar()}} */}
      {/* <Button variant="dark">
        <Link to='../' id="button_text">Back</Link>
      </Button> */}
      <h1 id='title'>Title: {book?.title}</h1>
      <div id='container'>
        <div id ='content' style={{width: 80+'rem'}} dangerouslySetInnerHTML={{ __html: book?.content }}>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
