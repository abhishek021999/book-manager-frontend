import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddBook from '../pages/Add-Book'
import BookDetail from '../pages/BookDetail'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-book' element={<AddBook/>}/>
        <Route path='/book/:id' element={<BookDetail/>}/>
    </Routes>
  )
}

export default AllRoutes
