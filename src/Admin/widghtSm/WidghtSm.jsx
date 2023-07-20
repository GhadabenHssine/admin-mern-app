import React, { useState, useEffect } from 'react'
import "./widghtSm.css"
import { Visibility } from "@mui/icons-material"
import axios from 'axios';



const WidghtSm = () => {
    const [newUsers, setNewUsers] = useState([]);
    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                console.log(res.data)
                setNewUsers(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        getNewUsers()
    }, [])

    return (
        <div className='WidghtSm'>
            <span className='WidgetSmTitle'> New Join Members</span>
            <ul className='WidgetSmList'>
                {newUsers.map((user, index) => (
                    <li className='WidghtSmListItem'  >

                        <img src={user.profilePi || "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"} alt='' className='WidghtSmImg' />
                        <div className='WidgetSmUser'>
                            <span className='WidgetSmUserName'>{user.username}</span>

                        </div>
                        <button className='WidgetSmButton'>
                            <Visibility className="WidgetSmIcon" />
                            Display
                        </button>
                    </li>
                )

                )}





            </ul>












        </div>
    )
}

export default WidghtSm