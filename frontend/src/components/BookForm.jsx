import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookForm = ({ book, loading, error, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [isbn10, setIsbn10] = useState('');
  const [isbn13, setIsbn13] = useState('');
  const [pages, setPages] = useState('');
  const [publisher, setPublisher] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [publishedAt, setPublishedAt] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setPublisher(book.publisher);
      setPublishedAt(book.publishedAt);
      setPages(book.pages);
      setIsbn10(book.isbn10);
      setIsbn13(book.isbn13);
      setSubject(book.subject);
    }
  }, [book]);

  function handleCancel() {
    navigate('/');
  }

  if (error) {
    alert(error.message);
    // reset();
  }

  if (loading) return <p>Loading...</p>;

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
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={onSubmit}>{book ? 'Edit' : 'Add'}</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
