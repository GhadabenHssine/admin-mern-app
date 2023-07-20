import React, { useContext, useEffect, useState } from 'react'
import "./newList.css"
import { ListsContext } from "../Context/listContext/listsContext"
import { MoviesContext } from '../Context/movieContext/moviesContext'
import { getMovies } from '../Context/movieContext/apiCall'
import { createList } from '../Context/listContext/apiCall'
import { useNavigate } from "react-router-dom";





const NewList = () => {
    const navigate = useNavigate();
    const [list, setList] = useState({ title: "", genre: "", type: "", content: [] })
    const { dispatch } = useContext(ListsContext)

    const { movies, dispatch: dispatchMovies } = useContext(MoviesContext)
    useEffect(() => {
        getMovies(dispatchMovies)
    }, [dispatchMovies])

    const handelChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value })
    }

    const handelSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setList({ ...list, [e.target.name]: value })

    }
    console.log(list)
    const handelSubmit = (e) => {
        e.preventDefault()
        createList(list, dispatch)
        navigate("/lists")
    }

    console.log(list)

    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New List</h1>
            <form className="addproductForm">
                <div className='formLeft'>

                    <div className='addproductItem'>
                        <label>Title</label>
                        <input type="text" placeholder='Title' name="title" onChange={handelChange} />
                    </div>

                    <div className='addproductItem'>
                        <label>Genre</label>
                        <input type="text" placeholder='genre' name="genre" onChange={handelChange} />
                    </div>

                    <div className='addproductItem'>
                        <label>Type</label>
                        <select name="type" onChange={handelChange}  >
                            <option >Type</option>
                            <option value="movie">Movies</option>
                            <option value="series">Series</option>
                        </select>

                    </div>
                </div>
                <div className='formRight'>
                    <div className='addproductItem'>
                        <label>Content</label>
                        <select multiple name="content" onChange={handelSelect} style={{ height: "280px" }} >
                            {movies.map((movie) => (
                                <option key={movie._id} value={movie._id}>{movie.title}</option>
                            ))}


                        </select>

                    </div>
                </div>
                <button className='addproductButton' onClick={handelSubmit}>Create</button>







            </form>







        </div>
    )
}

export default NewList