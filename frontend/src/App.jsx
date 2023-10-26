import { useQuery, gql } from '@apollo/client';
function App() {

  const GET_ALL_BOOKS = gql`
    query getAllBooks {
    books{
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

  const {data, loading, error} = useQuery(GET_ALL_BOOKS);

  if(loading) return <p>loading...</p>

  if(error) return <p>Error: {error.message}</p>

  return (
    <>
    {
      data.books.map(({id, title, pages, publisher, author, subject, publishedAt}) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{author} - {pages} pages - {subject} - {publisher} - {publishedAt}</p>
        </div>
      ))
    }

    </>
  )
}

export default App
