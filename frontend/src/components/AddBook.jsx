import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { gql, useMutation } from '@apollo/client';

const ADD_BOOK = gql`
  mutation AddBook($input: BookInput!) {
    addBook(book: $input) {
      id
    }
  }
`;

const AddBook = () => {
  const [title, setTitle] = useState(null);
  const [isbn10, setIsbn10] = useState(null);
  const [isbn13, setIsbn13] = useState(null);
  const [pages, setPages] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [author, setAuthor] = useState(null);
  const [subject, setSubject] = useState(null);
  const [publishedAt, setPublishedAt] = useState(null);

  const navigate = useNavigate();

  const [addBook, { error, reset }] = useMutation(ADD_BOOK, { onCompleted: () => navigate('/') });

  function handleSubmit(e) {
    e.preventDefault();

    addBook({
      variables: {
        input: {
          title,
          isbn10,
          isbn13,
          pages: Number(pages),
          publisher,
          author,
          subject,
          publishedAt,
        },
      },
    });
  }

  if (error) {
    alert(error.message);
    reset();
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', width: '100vw', marginTop: '3rem' }}>
      <form style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'title'}>Title</label>
          <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'isbn10'}>ISBN10</label>
          <input
            type='text'
            id='isbn10'
            value={isbn10}
            onChange={(e) => setIsbn10(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'isbn13'}>ISBN13</label>
          <input
            type='text'
            id='isbn13'
            value={isbn13}
            onChange={(e) => setIsbn13(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'pages'}>Pages</label>
          <input
            type='number'
            id='pages'
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'publisher'}>Publisher</label>
          <input
            type='text'
            id='publisher'
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'author'}>Author</label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'subject'}>Subject</label>
          <input
            type='text'
            id='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'publishedAt'}>Published Date</label>
          <input
            type='date'
            id='publishedAt'
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
          />
        </div>
        <div>
          <button style={{ width: '100%' }} onClick={handleSubmit}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
