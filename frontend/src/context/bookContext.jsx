import { createContext, useState } from 'react';

export const BookContext = createContext();

const INITIAL_STATE = {
  title: '',
  isbn10: '',
  isbn13: '',
  pages: '',
  publisher: '',
  author: '',
  subject: '',
  publishedAt: '',
};

export const BookProvider = ({ children }) => {
  const [book, setBook] = useState(INITIAL_STATE);

  function handleChange(prop, value) {
    setBook({ ...book, [prop]: value });
  }

  function handleReset() {
    setBook(INITIAL_STATE);
  }

  return (
    <BookContext.Provider value={{ book, setBook, handleChange, handleReset }}>
      {children}
    </BookContext.Provider>
  );
};
