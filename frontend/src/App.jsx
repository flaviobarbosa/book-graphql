import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Book from './components/Book.jsx';
import { useEffect } from 'react';

function App() {
  const GET_ALL_BOOKS = gql`
    query getAllBooks {
      books {
        id
        title
        author
        publisher
        publishedAt
        pages
        isbn10
        subject
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_ALL_BOOKS, {
    fetchPolicy: 'network-only',
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          marginTop: '3rem',
        }}>
        <button style={{ marginBottom: '4rem' }} onClick={() => navigate('/add')}>
          Add book
        </button>
        {data.books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

export default App;
