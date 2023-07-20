import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, Visibility } from '@mui/icons-material'
import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../Context/userContext/apiCall";
import { UsersContext } from "../Context/userContext/usersContext";



const UserList = () => {

    const { users, dispatch } = useContext(UsersContext)
    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch])


    const handelDelete = (id) => {
        deleteUser(id, dispatch)
        getUsers(dispatch)
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'Username',
            width: 200,

            renderCell: (params) => {
                return (
                    <div className="UserListUser">

                        <img src={params.row.profilePic || 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'} alt=""
                            className="UserListImg" />
                        {params.row.username}
                    </div>
                );
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'isAdmin',
            headerName: 'isAdmin',
            width: 200,

        },
        {
            field: 'action',
            headerName: 'Action',

            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id}><button className="visibility"><Visibility /></button></Link>

                        <DeleteOutline className="userListdelete" onClick={() => handelDelete(params.row._id)} />
                    </>
                );
            }

        },
    ];


    return (
        <div className="UserList">
            <DataGrid
                rows={users}
                columns={columns}
                disableSelectionOnClick
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}
            />



        </div>
    )
}

export default UserList