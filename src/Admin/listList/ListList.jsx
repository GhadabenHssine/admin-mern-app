import React, { useContext, useEffect } from 'react'
import "./listList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'
import { Link } from "react-router-dom";
import { ListsContext } from "../Context/listContext/listsContext"
import { getLists, deleteList } from '../Context/listContext/apiCall';

const ListList = () => {

    const { lists, dispatch } = useContext(ListsContext)
    useEffect(() => {
        getLists(dispatch)
    }, [dispatch])


    const handelDelete = (id) => {
        deleteList(id, dispatch)
        getLists(dispatch)
    }


    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        {
            field: 'action', headerName: 'Action', width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/lists/" + params.row._id }}>
                            <button className="productListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="productListdelete"
                            onClick={() => handelDelete(params.row._id)}
                        />
                    </>
                );
            }

        },
    ];
    return (
        <div className="productList">
            <DataGrid
                rows={lists}
                columns={columns}
                disableSelectionOnClick
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id} />
        </div>
    )
}

export default ListList