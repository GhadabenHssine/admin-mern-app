import "./editProfile.css"
import React, { useContext, useState } from 'react'
import { UsersContext } from '../Context/userContext/usersContext';
import axios from 'axios';
import { Publish } from "@mui/icons-material"
import { editUser } from '../Context/userContext/apiCall';
import { AuthContext } from '../Context/authContext/authContext'
import { useLocation, useNavigate } from 'react-router-dom';

const EditProfil = () => {

    const location = useLocation()
    const userE = location.state.userName
    console.log(userE)
    const { user } = useContext(AuthContext)

    const [file, setFile] = useState(null);
    const [profilePic, setUrl] = useState(userE.profilePic)
    const [username, setUserName] = useState(userE.username)
    // const [password, setPassword] = useState("")
    const [email, setEmail] = useState(userE.email)
    const [isAdmin, setIsAdmin] = useState(true)
    const { dispatch } = useContext(UsersContext)
    const navigate = useNavigate()
    const uploadImage = async (e) => {
        e.preventDefault()
        const form = new FormData();
        form.append("file", file)
        form.append("upload_preset", "ghadabenhssine");
        await axios.post('https://api.cloudinary.com/v1_1/ecomerce-site-web/upload', form).then((res) => setUrl(res.data.secure_url))
    }


    const userEdit = { username, email, isAdmin, profilePic }
    const idD = user._id
    // console.log(idD)
    // console.log(userEdit)

    const handelSubmit = (e) => {
        e.preventDefault()
        editUser(idD, userEdit, dispatch)
        // navigate("/users")
    }
    return (
        <div className='editProfil'>

            <div className='userUpdate'>

                <span className='userUpdateTitle'>Edit</span>
                <form className='userUpdateForm'>
                    <div className='userUpdateLeft'>
                        <div className="userUpdateItem">
                            <label>User Name</label>
                            <input type='text'
                                className='userUpdateInput' name="username" value={username} onChange={e => setUserName(e.target.value)} />
                        </div>


                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type='text'
                                className='userUpdateInput' name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        {/* <div className="userUpdateItem">
                            <label>Password</label>
                            <input type='password'
                                className='userUpdateInput' name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div> */}

                        <div className='userUpdateItem'>
                            <label>isAdmin</label>
                            <select id="is  Admin" name="isAdmin" value={isAdmin} onChange={e => setIsAdmin(e.target.value)} >
                                <option value={true}>true</option>
                                <option value={false}>false</option>
                            </select>
                        </div>
                        <button className="userUpdateButton" onClick={handelSubmit}>Edit</button>
                    </div>


                    <div className='userUpdateRight'>
                        <div className='userUpdateUplad'>
                            <img src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                                alt="" className='userUpdateImg' />

                            <label htmlFor='file'>
                                <Publish className="userUpdateIcon" />
                            </label>
                            <input type='file' id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />


                            <button className="userUpdateButton" onClick={uploadImage}>Upload</button>
                        </div>


                    </div>




                </form>



            </div>


        </div>
    )
}

export default EditProfil