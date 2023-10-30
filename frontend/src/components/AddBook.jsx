import { useNavigate } from 'react-router-dom';

import { gql, useMutation } from '@apollo/client';
import BookForm from './BookForm';

const ADD_BOOK = gql`
  mutation AddBook($input: BookInput!) {
    addBook(book: $input) {
      id
    }
  }
`;

const AddBook = () => {
  const navigate = useNavigate();

  const [addBook, { error, reset, loading }] = useMutation(ADD_BOOK, {
    onCompleted: () => navigate('/'),
  });

  function handleAddBook(e) {
    e.preventDefault();

    alert('handle add');

    // addBook({
    //   variables: {
    //     input: {
    //       title,
    //       isbn10,
    //       isbn13,
    //       pages: Number(pages),
    //       publisher,
    //       author,
    //       subject,
    //       publishedAt,
    //     },
    //   },
    // });
  }

  if (error) {
    alert(error.message);
    reset();
  }

  return <BookForm onSubmit={handleAddBook} loading={loading} />;
};

export default AddBook;
