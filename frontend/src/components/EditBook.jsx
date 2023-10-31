import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useBook } from '../hooks/useBook';
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

const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $book: BookInput!) {
    updateBook(id: $id, book: $book) {
      id
    }
  }
`;

const EditBook = () => {
  let { bookId } = useParams();
  const navigate = useNavigate();

  const { book, setBook } = useBook();

  const [getBook, { loading, error, data }] = useLazyQuery(GET_BOOK);

  const [updateBook, { loading: updateLoading, error: updateError, reset }] = useMutation(
    UPDATE_BOOK,
    {
      onCompleted: () => navigate('/', { replace: true }),
    }
  );

  useEffect(() => {
    if (bookId) {
      getBook({ variables: { id: bookId } });
    }
  }, [bookId, getBook]);

  useEffect(() => {
    if (data) {
      setBook(data.bookById);
    }
  }, [data, setBook]);

  function handleEdit(e) {
    e.preventDefault();

    updateBook({
      variables: {
        id: book.id,
        book: {
          title: book.title,
          isbn10: book.isbn10,
          isbn13: book.isbn13,
          pages: Number(book.pages),
          publisher: book.publisher,
          author: book.author,
          subject: book.subject,
          publishedAt: book.publishedAt,
        },
      },
    });
  }

  if (error) {
    alert(error.message);
  }

  if (loading) return <p>Loading...</p>;

  return <BookForm action='edit' onSubmit={handleEdit} />;
};

export default EditBook;
