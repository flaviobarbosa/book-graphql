import { useNavigate } from 'react-router-dom';
import { useBook } from '../hooks/useBook';

const BookForm = ({ action, loading, error, onSubmit }) => {
  const navigate = useNavigate();

  const { book, handleChange, handleReset } = useBook();

  function handleCancel() {
    handleReset();
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
          {/* <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} /> */}
          <input
            type='text'
            id='title'
            value={book.title}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'isbn10'}>ISBN10</label>
          <input
            type='text'
            id='isbn10'
            value={book.isbn10}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'isbn13'}>ISBN13</label>
          <input
            type='text'
            id='isbn13'
            value={book.isbn13}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'pages'}>Pages</label>
          <input
            type='number'
            id='pages'
            value={book.pages}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'publisher'}>Publisher</label>
          <input
            type='text'
            id='publisher'
            value={book.publisher}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'author'}>Author</label>
          <input
            type='text'
            id='author'
            value={book.author}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'subject'}>Subject</label>
          <input
            type='text'
            id='subject'
            value={book.subject}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor={'publishedAt'}>Published Date</label>
          <input
            type='date'
            id='publishedAt'
            value={book.publishedAt}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={onSubmit}>{action === 'edit' ? 'Edit' : 'Add'}</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
