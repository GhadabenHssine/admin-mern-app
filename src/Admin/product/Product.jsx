import React, { useEffect, useState } from 'react'
import "./product.css"
import { Link, useParams } from "react-router-dom"
import Chart from "../chart/Chart"
import { productData } from "../dummyData"
import { Publish } from "@mui/icons-material"
import axios from 'axios'
const Product = () => {
    const params = useParams();

    const id = params.productId;
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + id, {
                    headers: {
                        "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setMovie(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    }, [id])





    return (
        <div className="product">
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Movie</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>

            <div className="productTop">

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={movie.img} alt="" className="productInfoImg" />
                        <span className="productName">{movie.title}</span>

                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="productBotton" >
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} />
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit} />
                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer} />
                        <label>Video</label>
                        <input type="file" placeholder={movie.video} />



                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className='productUploadImg' />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className='productButton'>Update</button>
                    </div>


                </form>

            </div>



        </div>
    )
}

export default Product