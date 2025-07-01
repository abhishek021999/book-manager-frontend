import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBookById } from '../utils/bookStorage'


function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)

  useEffect(() => {
    const found = getBookById(id)
    setBook(found)
  }, [id])

  if (!book) {
    return <div>Book not found.</div>
  }

  return (
    <div style={{maxWidth: 500, margin: '2rem auto', border: '1px solid #ccc', padding: 20, borderRadius: 8}}>
      <h2>{book.title}</h2>
      <h4>Author: {book.author}</h4>
      <h5>Genre: {book.category}</h5>
      <h5>Price: {book.price}</h5>
      {book.description && <p>Description: {book.description}</p>}
      <button onClick={() => navigate('/')}>Back to Home</button>
      
    </div>
  )
}

export default BookDetail 