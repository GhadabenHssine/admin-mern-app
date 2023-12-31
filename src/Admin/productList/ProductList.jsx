import React, { useContext, useEffect } from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'

import { Link } from "react-router-dom";
import { MoviesContext } from '../Context/movieContext/moviesContext';
import { deleteMovie, getMovies } from '../Context/movieContext/apiCall';

const ProductList = () => {

    const { movies, dispatch } = useContext(MoviesContext)
    useEffect(() => {
        getMovies(dispatch)
    }, [dispatch])


    const handelDelete = (id) => {
        deleteMovie(id, dispatch)
        getMovies(dispatch)
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'movie',
            headerName: 'Movie',
            width: 200,

            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.img} alt=""
                            className="productListImg" />
                        {params.row.title}
                    </div>
                );
            }
        },
        {

            field: 'genre', headerName: 'Genre', width: 120,
        },

        {

            field: 'year', headerName: 'Year', width: 120,
        },
        {

            field: 'limit', headerName: 'Limit', width: 120,
        },
        {

            field: 'isSeries', headerName: 'isSeries', width: 120,
        },



        {
            field: 'action',
            headerName: 'Action',

            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/product/" + params.row._id, state: { movie: params.row } }}>
                            <button className="productListEdit">Edit</button></Link >

                        <DeleteOutline className="productListdelete"
                            onClick={() => handelDelete(params.row._id)} />
                    </>
                );
            }

        },
    ];
    return (
        <div className="productList">
            <DataGrid
                rows={movies}
                columns={columns}
                disableSelectionOnClick
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}

            />
        </div>
    )
}

export default ProductList