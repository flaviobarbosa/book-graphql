const Book = ( {id, title, pages, publisher, author, subject, publishedAt}) => {
    return (
        <div key={id} style={{marginBottom: '2rem', display: 'flex', alignItems: 'center'}}>
            <div style={{width: '25rem'}}>
                <p style={{marginBottom: '0.25rem'}}>{title}</p>
                <small>{author} - {pages} pages - {subject} - {publisher} - {publishedAt}</small>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Book;