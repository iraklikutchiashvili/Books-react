import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={(e) => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.title} </div>
      <book className="auth">{book.author} </book>
    </li>
  );
};

export default BookDetails;
