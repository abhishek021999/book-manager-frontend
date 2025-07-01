import React, { useEffect, useState } from 'react'
import { dummyData } from '../dummy'
import { getBooks, saveBooks } from '../utils/bookStorage'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [select, setSelect] = useState("")
    const [sortbyprice, setSortbyprice] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        
        if (getBooks().length === 0) {
            const booksWithStringIds = dummyData.map(b => ({ ...b, id: String(b.id) }))
            saveBooks(booksWithStringIds)
        }
        const books = getBooks()
        setData(books)
        setFilterData(books)
    }, [])

    useEffect(() => {
        let dubdata = [...data]
        if (select && select !== "All") {
            dubdata = dubdata.filter((ele) => ele.category === select)
        }
        if (sortbyprice === "high") {
            dubdata = dubdata.sort((a, b) => b.price - a.price)
        } else {
            dubdata = dubdata.sort((a, b) => a.price - b.price)
        }
        setFilterData(dubdata)
    }, [select, sortbyprice, data])

    return (
        <>
            <div>
                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Tech">Tech</option>
                    <option value="Science">Science</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery">Mystery</option>
                    
                </select>
                <select name='sortbyprice' value={sortbyprice} onChange={(e) => setSortbyprice(e.target.value)}>
                    <option value="high">High To Low</option>
                    <option value="low">Low To High</option>
                </select>
            </div>
            <div className='conatiner'>
                {filterData && filterData.map((ele) => {
                    return (
                        <div className='card' key={ele.id} onClick={() => navigate(`/book/${ele.id}`)} style={{cursor:'pointer'}}>
                            <h3 className='title'>Title: {ele.title}</h3>
                            <h4 className='author'>Author: {ele.author}</h4>
                            <h5 className='category'>Genre: {ele.category}</h5>
                            <h5 className='price'>Price: {ele.price}</h5>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home
