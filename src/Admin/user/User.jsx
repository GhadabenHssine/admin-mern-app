import React, { useContext, useEffect, useState } from 'react'
import "./user.css"

import { MailOutline, PermIdentity, Grid3x3, Publish } from "@mui/icons-material"

import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const User = () => {
    const params = useParams()
    const id = params.UserId
    const [user, setUser] = useState({})


    console.log(user)
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get("/users/find/" + id, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setUser(res.data)
                // console.log(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [id])


    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h3 className='userTitle'>Edit User</h3>
                <Link to="/newUser">
                    <button className='userAddButton'>Create</button>
                </Link>

            </div>
            <div className="userContainer">
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src={user.profilePic || 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'} alt='' className='userShowImg' />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>{user.username}</span>

                        </div>
                    </div>

                    <div className='userShowBotton'>
                        <span className="userShowTitle">Account Details</span>
                        <div className='userShowInfo'>
                            <Grid3x3 className="userShowIcon" />
                            <span className="userShowInfoTitle">Id:{user._id}</span>
                        </div>
                        <div className='userShowInfo'>
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.username}</span>
                        </div>


                        <span className="userShowTitle">Contact Details</span>

                        <div className='userShowInfo'>
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>


                    </div>




                </div>











            </div>
        </div>
    )
}

export default User