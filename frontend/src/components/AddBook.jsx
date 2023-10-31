import { useNavigate } from 'react-router-dom';

import { gql, useMutation } from '@apollo/client';
import BookForm from './BookForm';
import { useBook } from '../hooks/useBook';

const ADD_BOOK = gql`
  mutation AddBook($input: BookInput!) {
    addBook(book: $input) {
      id
    }
  }
`;

const AddBook = () => {
  const navigate = useNavigate();

  const { book } = useBook();

  const [addBook, { error, reset, loading }] = useMutation(ADD_BOOK, {
    onCompleted: () => navigate('/', { replace: true }),
  });

  function handleAddBook(e) {
    e.preventDefault();

    addBook({
      variables: {
        input: {
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
    reset();
  }

  return <BookForm action='add' onSubmit={handleAddBook} loading={loading} />;
};

export default AddBook;
