import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title} </div>
      <book className="auth">{book.author} </book>
    </li>
  );
};

export default BookDetails;
