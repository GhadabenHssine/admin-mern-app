import Chart from '../chart/Chart'
import React, { useState, useEffect, useMemo } from 'react'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'

import './homeAdmin.css'
import WidghtSm from '../widghtSm/WidghtSm'
import WidghtLg from '../widghtLg/WidghtLg'
import axios from "axios"

const HomeAdmin = () => {
    const MONTH = useMemo(() => [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ], []
    );
    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats", {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                }
                )
                console.log(res.data)
                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id
                })
                statsList.map((item) => setUserStats((prev) => [
                    ...prev,
                    { name: MONTH[item._id - 1], "New User": item.total }
                ]))
            } catch (error) {
                console.log(error)
            }
        }
        getStats()
    }, [MONTH])


    return (
        <div className="adminHome">
            <FeaturedInfo />
            <Chart data={userStats} grid dataKey="New User" title="User Analytics" />
            <div className='homeWidgets'>
                <WidghtSm />
                <WidghtLg />
            </div>



        </div>
    )
}

export default HomeAdmin