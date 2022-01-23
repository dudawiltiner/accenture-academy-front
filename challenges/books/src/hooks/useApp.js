import { useState } from "react";

export default function useApp(){
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  const removeBook = (removedBook) => {
    const newList = books.filter((item) => item !== removedBook)
    setBooks([...newList]);
  }

  const saveBook = (e) => {
    e.preventDefault()
    setBooks([...books, book])
  }

  return {removeBook, books, saveBook, setBook}
}