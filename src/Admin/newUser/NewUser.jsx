import React, { useContext, useState } from 'react'
import "./newUser.css"
import { createUser } from '../Context/userContext/apiCall'
import { UsersContext } from '../Context/userContext/usersContext'
import { useNavigate } from "react-router-dom";
const NewUser = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "", isAdmin: false })
    const { dispatch } = useContext(UsersContext)
    const navigate = useNavigate()
    const handelChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
    }
    // console.log(user);
    const handelSubmit = (e) => {
        e.preventDefault()
        createUser(user, dispatch)
        navigate("/users")
    }


    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>New User</label>
                    <input type="text" name='username' onChange={handelChange} />

                </div>


                <div className='newUserItem'>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handelChange} />

                </div>
                <div className='newUserItem'>
                    <label>Password</label>
                    <input type="password" placeholder="password" name="password" onChange={handelChange} />

                </div>

                <div className='newUserItem'>
                    <label>isAdmin</label>
                    <select className='newUserSelect' name="isAdmin" id="admin" onChange={handelChange}>
                        <option>isAdmin</option>
                        <option value={true}>true</option>
                        <option value={false}>false</option>
                    </select>


                </div>

            </form>

            <button className="newUserButton" onClick={handelSubmit}>Create</button>





        </div>
    )
}

export default NewUser