import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../utils/bookStorage'

function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    description: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    if (!form.title || !form.author || !form.category || !form.price) {
      setError('Please fill all required fields.')
      return
    }
    if (isNaN(form.price) || Number(form.price) <= 0) {
      setError('Price must be a number greater than 0.')
      return
    }
   
    addBook({
      ...form,
      price: Number(form.price)
    })
    navigate('/')
  }

  return (
    <div>
      <h1>ADD BOOK</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title*:</label>
          <input name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Author*:</label>
          <input name="author" value={form.author} onChange={handleChange} required />
        </div>
        <div>
          <label>Category*:</label>
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Fiction">Fiction</option>
            <option value="Tech">Tech</option>
            <option value="Science">Science</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
        <div>
          <label>Price*:</label>
          <input name="price" value={form.price} onChange={handleChange} required type="number" min="1" />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={form.description} onChange={handleChange} />
        </div>
        {error && <div style={{color:'red'}}>{error}</div>}
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
