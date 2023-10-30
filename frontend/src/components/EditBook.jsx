import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { gql, useLazyQuery } from '@apollo/client';
import BookForm from './BookForm';

const GET_BOOK = gql`
  query BookById($id: ID!) {
    bookById(id: $id) {
      id
      title
      author
      publisher
      publishedAt
      pages
      isbn10
      isbn13
      subject
    }
  }
`;

const EditBook = () => {
  const [book, setBook] = useState(null);

  let { bookId } = useParams();

  const [getBook, { loading, error, data }] = useLazyQuery(GET_BOOK);

  // useEffect(() => console.log(book), [book]);

  useEffect(() => {
    if (bookId) {
      getBook({ variables: { id: bookId } });
    }
  }, [bookId, getBook]);

  useEffect(() => {
    if (data) {
      // console.log({ ...data.bookById });
      // console.log(data.bookById);
      setBook(data.bookById);
    }
  }, [data]);

  function handleEdit(e) {
    e.preventDefault();

    alert('handle edit');
  }

  if (error) {
    alert(error.message);
  }

  if (loading) return <p>Loading...</p>;

  return <BookForm book={book} onSubmit={handleEdit} />;
};

export default EditBook;
