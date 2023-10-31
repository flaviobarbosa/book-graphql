import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const DELETE = gql`
  mutation Delete($id: ID!) {
    deleteById(id: $id)
  }
`;

const Book = ({ id, title, pages, publisher, author, subject, publishedAt }) => {
  const navigate = useNavigate();

  const [deleteById, { error, loagin }] = useMutation(DELETE, {
    onCompleted: () => navigate('/', { replace: true }),
  });

  function handleEdit() {
    navigate(`/edit/${id}`);
  }

  function handleDelete(e) {
    e.preventDefault();
    console.log(id);
    deleteById({
      variables: {
        id: id,
      },
    });
  }

  return (
    <div key={id} style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '25rem' }}>
        <p style={{ marginBottom: '0.25rem' }}>{title}</p>
        <small>
          {author} - {pages} pages - {subject} - {publisher} - {publishedAt}
        </small>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Book;
