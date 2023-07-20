import React, { useContext, useEffect, useState } from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings, Logout } from '@mui/icons-material'
import { AuthContext } from '../Context/authContext/authContext'
import { logout } from "../Context/authContext/authAction"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'


const TopBar = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [userName, setUserName] = useState("")
    const { dispatch } = useContext(AuthContext)
    // console.log(user);
    const handleLogout = () => {
        dispatch(logout());
        navigate("/loginAdmin")

    };
    const id = user._id
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`/users/find/${id}`, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setUserName(res.data)
                // console.log(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        getUser()

    }, [])

    const handleButtonClick = () => {
        navigate('/editProfil', { state: { userName } });
    };

    return (
        <div className="topbar">
            <div className="wrapperTopbar">

                <div className="topLeft"><span className="logo">Admin</span></div>
                <div className='blocLinck'>
                    <span className='nameAdmin'>Admin Name :</span>
                    <div className="link" onClick={handleButtonClick}>{userName.username} </div>
                    <img src={userName.profilePic || "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"} alt="" className='topAvater' />
                </div>
                <div className="topRight">
                    <NotificationsNone />
                    <div className="topBarIconContainer">
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>




                    <div className="profile">


                        <Logout onClick={handleLogout} className="iconL" /><span>Logout</span>

                    </div>
                </div>


            </div>



        </div>
    )
}

export default TopBar