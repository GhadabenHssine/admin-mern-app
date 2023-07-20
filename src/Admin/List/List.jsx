import React, { useContext, useEffect, useState } from 'react'
import "./list.css"
import { Link, useNavigate, useParams } from "react-router-dom"


import axios from 'axios'
import { updateList } from '../Context/listContext/apiCall'
import { ListsContext } from '../Context/listContext/listsContext'

const List = () => {
    const { lists, dispatch } = useContext(ListsContext)
    const params = useParams();
    const navigate = useNavigate()

    const id = params.productId;
    // console.log(id)
    const [list, setList] = useState({})

    const [update, setUpdate] = useState(null)

    const handelChange = (e) => {
        const value = e.target.value;
        setUpdate({ ...update, [e.target.name]: value })
    }


    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.get("/lists/find/" + id, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setList(res.data)


            } catch (error) {
                console.log(error)
            }
        }
        getList()
    }, [id])

    const handelSubmit = (e) => {
        e.preventDefault()
        updateList(update, id, dispatch);
        navigate("/lists")

    }



    return (
        <div className="product">
            <div className='productTitleContainer'>
                <h1 className='productTitle'>List</h1>
                <Link to="/newList">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>

            <div className="productTop">

                <div className="productTopRight">
                    <div className="productInfoTop">

                        <span className="productName">{list.title}</span>

                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{list.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Type:</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>



                    </div>
                </div>
            </div>





        </div>
    )
}

export default List